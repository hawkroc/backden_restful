/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'
// import initService from  '../service/init'
const initService = require('../service/init.js')

const init = async (req, res, next) => {
  let ret = await initService.getData()
  return next({code: 200, msg: {data: ret, count: ret.length}})
}

const addData = async(req, res, next) => {
  let ret = await initService.addData(req.body)
  if (ret.errors) {
    return next({code: 500, msg: {data: ret.errors}})
  } else {
    return next({code: 200, msg: 'success'})
  }
}

//  const delData=async(req, res, next)=>{
//    let rs= await
//   return next({code: 200, msg: 'success'})
// }

module.exports = errorHandler({
  init,
  addData
})
