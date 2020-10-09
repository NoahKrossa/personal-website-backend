const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uuid = require('uuid')

const userSchema = new mongoose.Schema({
  publicId: {
    type: String
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['admin', 'client'],
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function (next) {
  const user = this
  /** Set publicId */
  user.publicId = uuid.v4()

  /** Hash password */
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash
      next()
    })
  })
})

/** Create method to compare password */
userSchema.statics.checkPassword = async (passwordString, passwordHash) => {
  const isValid = await bcrypt.compare(passwordString, passwordHash)
  return isValid
}
const User = mongoose.model('users', userSchema)

module.exports = User
