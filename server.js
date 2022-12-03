const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers')
const helpers = require ('./utils/helpers')
const session = require('express-session')

const sequelize = require('./config/connection')
// Stores session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express()
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers })

// TODO: configure the session
const sess = {
    secret: 'process.env.SESSION_SECRET',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
// TODO: Get access to cookie ID
app.use(session(sess));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening to port ${PORT}`))
})
