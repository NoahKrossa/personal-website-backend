const User = require('../models/user.model')
const { createToken } = require('../services/jwt.service')

const authentificateUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ name: username }).exec()

    if (!user) {
      console.log('Not registred user')
      return res.sendStatus(400)
    }

    const passwordMatch = await User.checkPassword(password, user.password)
    if (!passwordMatch) {
      console.log('Password and username not match')
      return res.sendStatus(400)
    }
    res.cookie('token', createToken(user))
    res.json({
      message: 'Logged successfully!',
      user
    })
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

const closeSession = (req, res) => {
  res.clearCookie('token')
  res.json({
    message: 'Session closed'
  })
}

module.exports = {
  authentificateUser,
  closeSession
}
