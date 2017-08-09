/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'

const initCtrl = require('../../controllers/v1/init')

module.exports = (router) => {
  router.get('/initdata', initCtrl.init)
  router.post('/initdata', initCtrl.addData)
}
