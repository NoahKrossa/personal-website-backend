const mongoose = require('mongoose')
const moment = require('moment')

const postContentSchema = new mongoose.Schema({
  tagName: String,
  text: String,
  atributes: [
    {
      name: String,
      value: String
    }
  ]
})

const postSchema = new mongoose.Schema({
  publicId: {
    type: String,
    default: require('uuid').v1(),
    unique: true
  },
  title: String,
  content: [postContentSchema],
  author: String,
  publishDate: {
    type: Date,
    default: moment().unix()
  },
  tags: [String],
  category: [String],
  lastEditDate: Date
})

postSchema.pre('save', function (next) {
  const post = this
  if (!post.isModified()) return next()
  post.lastEditDate = moment().unix()
  next()
})

module.exports = mongoose.model('posts', postSchema)
