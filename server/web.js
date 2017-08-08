/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @desc [description]
 */

'use strict'

const path              = require('path')
const responseTime      = require('response-time')
const cookieParser      = require('cookie-parser')
const bodyParser        = require('body-parser')
const serveFavicon      = require('serve-favicon')
// const expressSession    = require('express-session');
const express           = require('express')
const config            = require('config')
const compression       = require('compression')

const router            = require('../app/routes')
const formatResp        = require('../app/middlewares/format-resp')
const mongoose          = require('mongoose')
const mongodbUrl        = `mongodb://@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`

const app = express()

app.use(compression())
app.use(responseTime())
app.use(logger.log4js.connectLogger(logger, config.log))
app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(serveFavicon(path.join(__dirname, '../static/img/fav.ico')))
app.use(router)
app.use(formatResp.formatResp({format: 'JSON'}))

mongoose.Promise = global.Promise
mongoose.createConnection(mongodbUrl)

function start () {
  app.listen(config.web.port, function () {
    logger.info(config.web.name, config.web.url, 'start up!')
  })
};

if (!module.parent) {
  start()
} else {
  exports.start = start
}
