const jwt = require('jwt-simple')
const moment = require('moment')
const { secretTOKEN } = require('../app.config')

const createToken = (user) => {
  const payload = {
    sub: user.publicId,
    name: user.name,
    role: user.role,
    iat: moment().unix(),
    exp: moment().add(15, 'days').unix()
  }
  try {
    const token = jwt.encode(payload, secretTOKEN, null)
    return token
  } catch (e) {
    throw e
  }
}
const decodeToken = (token) => {
  try {
    const payload = jwt.decode(token, secretTOKEN)
    return payload
  } catch (e) {
    throw e
  }
}

module.exports = {
  createToken,
  decodeToken
}
