const { decodeToken } = require('../services/jwt.service')
const moment = require('moment')

module.exports = {
  auth: (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
      console.log('Not found token')
      return res.sendStatus(403)
    }

    const payload = decodeToken(token)
    /** Check if token has not expired */
    if (moment().unix() > payload.exp) {
      console.log('session was expired')
      res.clearCookie('token')
      return res.sendStatus(401)
    }

    /** Validate permis */
    if (req.method !== 'GET') {
      console.log('Only allowed GET request')
      res.clearCookie('token')
      return res.sendStatus(401)
    }

    req.user = { name, role } = payload
    next()
  }
}
