"use strict";
const User = require("../models/user");
const getUser = async () => {
  let ret = await "test is success"; //db.Init.find()
  return ret;
};

const addUser = async opt => {
  let ret = await "test2 is success"; // db.Init.create(opt)
  console.log('test')
  return ret;
};

module.exports = {
  getUser,
  addUser
};
