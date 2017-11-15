/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'

const userService = require('../service/userService')

 const login=async (req, res, next)=> {
  let ret = await userService.getUser()
  return next({code: 200, msg: {data: ret, count: ret.length}})
}

 const addUser =async(req, res, next)=> {
  // console.log('req.body'+JSON.stringify(req.body))
  let ret =await userService.addUser(req.body.name,req.body.key)
  if (ret.errors) {
    return next({code: 500, msg: {data: ret.errors}})
  } else {
    return next({code: 200, msg: 'success'})
  }
}


module.exports = errorHandler({
  login,
  addUser
})
