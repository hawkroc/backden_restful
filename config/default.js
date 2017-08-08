/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
*/

'use strict'

const path = require('path')
const pkg  = require('../package.json')

module.exports = {
  web: {
    url: 'http://127.0.0.1:10086',
    host: '127.0.0.1',
    port: 10086,
    name: pkg.name
  },
  log: {
    dir: path.join(__dirname, '..', `/logs/${pkg.name}/log/`),
    nolog: /\.(js|css|png|jpg|jpeg|ico|svg|gif)/,
    format: ':remote-addr :method :url :status :response-time ms :user-agent :content-length',
    replaceConsole: true,
    level: 'AUTO',
    console: false
  }
}
