/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'

const initService = require('../../service/v1/init.js')
const Init = require('../../models/init.js')

module.exports = {
  init
}

async function init (req, res, next) {
  // let ret = await initService.getData()
  // let ret = await Init.count()
  Init.count().then((count) => {
    return next({code: 200, msg: count})
  })
  .catch(err => {
    return next({code: 500, msg: err})
  })
}
