/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'

module.exports = {
  init
}

async function init (req, res, next) {
  return next({code: 200, msg: 'hello world'})
}
