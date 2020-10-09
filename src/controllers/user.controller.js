const User = require('../models/user.model')

const createUser = async (req, res) => {
  try {
    const { body: userData } = req
    let newUser = new User(userData)
    newUser = await newUser.save()
    res.json({
      message: 'Added new user',
      newUser
    })
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

module.exports = {
  createUser
}
