/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'

const initService = require('../../service/v1/init.js')

async function init (req, res, next) {
  let ret = await initService.getData()
  return next({code: 200, msg: {data: ret}})
}

async function addData (req, res, next) {
  let ret = await initService.addData(req.body)
  if (ret.errors) {
    return next({code: 500, msg: {data: ret.errors}})
  } else {
    return next({code: 200, msg: 'success'})
  }
}

module.exports = {
  init,
  addData
}
