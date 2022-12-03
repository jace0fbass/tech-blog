const sequelize = require("../config/connecion");
const { User, Post } = require("../models");

const userData = [
  {
    username: "golfluva18",
    email: "golfluva18@aol.com",
    password: "pazzwurd",
  },
  {
    username: "webdevY2k",
    email: "webdevY2K@aol.com",
    password: "pazzwurd",
  },
  {
    username: "Forepheus",
    email: "Forepheus2012@aol.com",
    password: "pazzwurd",
  },
];
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
