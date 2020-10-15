const mongoose = require('mongoose')

const postInfoSchema = new mongoose.Schema({
  year: Number,
  month: Number,
  id: String,
  title: String
})

module.exports = mongoose.model('postInfos', postInfoSchema)
