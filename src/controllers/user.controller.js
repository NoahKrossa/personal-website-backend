const User = require('../models/user.model')
const { createToken } = require('../services/jwt.service')

const authentificateUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = User.findOne({ name: username })
    if (!user) {
      console.log('Not registred user')
      return res.sendStatus(400)
    }
    const passwordMatch = await User.passwordMatch(password, user.password)
    if (!passwordMatch) {
      console.log('Password and username not match')
      return res.sendStatus(400)
    }
    res.cookie('token', createToken(user))
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

module.exports = {
  authentificateUser
}
