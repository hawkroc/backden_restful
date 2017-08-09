const mongoose = require('mongoose')
const fs       = require('fs')
const path     = require('path')

const Model = {}

mongoose.Promise = Promise
mongoose.set(`debug`, (coll, method, query, doc, options) => {
  logger.info(`${coll} ${method} ${JSON.stringify(query)} ${JSON.stringify(doc)}`)
})

mongoose.connect(config.mongodb.url, {useMongoClient: true})
        .on('error', (err) => {
          logger.error(`connect to ${config.mongodb.url} error: ${err.message}`)
          process.exit(1)
        })
        .once('open', () => {
          logger.info(`Database ${config.mongodb.url} Connected!`)
          logger.info('May The Bug Be With You XD....')
        })

fs.readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== -1) && (file !== 'index.js')
  })
  .forEach((file) => {
    let model = require(path.join(__dirname, file))
    Model[model.modelName] = mongoose.model(model.modelName)
  })

module.exports = Model
