const mongoose = require('mongoose')
const moment = require('moment')
const uuid = require('uuid')

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
  post.publicId = uuid.v4()
  next()
})

postSchema.plugin(require('mongoose-beautiful-unique-validation'))
module.exports = mongoose.model('posts', postSchema)
