const mongoose = require('mongoose')

const initSchema = mongoose.Schema({
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

const Init = module.exports = mongoose.model('Init', initSchema)
