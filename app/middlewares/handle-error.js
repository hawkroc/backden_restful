'use strict'
const logger = require('./../../tools/logger/index')

function catchError (ctrl) {
  return function (req, res, next) {
    let ret = ctrl.apply(this, arguments)
    if (ret && typeof ret.then === 'function') {
      return ret.catch((err) => {
        return next({code: 500, msg: err.message || err, err: err})
      })
    }
    logger.error(`${ctrl.name}'s doesnt return a promise`)
    return ret
  }
}

module.exports = (params) => {
  if (typeof params === 'function') {
    return catchError(params)
  }
  if (typeof params === 'object') {
    for (let key in params) {
      if (typeof params[key] === 'function') {
        params[key] = catchError(params[key])
      }
    }
  }
  return params
}
