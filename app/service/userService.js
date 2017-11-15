"use strict";
const User = require("../models/user");
const getUser = async () => {
  let ret = await "test is success"; //db.Init.find()
  return ret;
};

// const addUser = async (name,key) => {
//   let ret = await "test2 is success"; // db.Init.create(opt)
//   let user =new User()
//   user.name=name
//   user.key=key
//   user.save((err) => {
//          if (err) {

//              return err;
//          }
//      });
//   console.log('test')
//   return ret;
// };

const addUser = async (name, key) => {
  let user = new User();
  user.key = key;
  user.name = name;
   await User.deleteOne({ key: key }, err => {
    if (err) {
      return err;
    }
    user.save(err => {
      if (err) {
        return err;
      }
    });
  });
  return user
};

module.exports = {
  getUser,
  addUser
};
