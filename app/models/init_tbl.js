const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const initSchema = new Schema({
  name: { type: String, required: true },
  createtime: { type: Number, default: Date.now() },
  updatetime: { type: Number, default: Date.now() }
}, {
  versionKey: false
})

module.exports = mongoose.model('Init', initSchema)
