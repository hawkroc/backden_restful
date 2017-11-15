/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'

const initCtrl = require('../../controllers/init')
const userCtrl = require('../../controllers/user')

module.exports = (router) => {
  router.get('/initdata', initCtrl.init)
  router.post('/initdata', initCtrl.addData)
  router.get('/login', userCtrl.login)
  router.post('/addUser', userCtrl.addUser)
}
