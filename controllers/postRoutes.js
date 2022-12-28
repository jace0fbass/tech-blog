const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((post) => post.get({ plain: true }));

    res.render('posts', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
})


router.get('/posts', async (req, res) => {
  try {
    const allPosts = await Post.findAll()
    res.json(allPosts)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/posts', async (req, res) => {
  try {
    const result = await Post.create(req.body)
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/posts/:id', async (req, res) => {
  try {
    const result = await Post.update(req.body, {
      where: {
        id: req.params.post_id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/posts/:id', async (req, res) => {
  try {
    const result = await Post.destroy({
      where: {
        id: req.params.post_id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;