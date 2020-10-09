const { decodeToken } = require('../services/jwt.service')
const moment = require('moment')

module.exports = {
  auth: (req, res, next) => {
    const token = req.cookies
    if (!token) return res.sendStatus(403)

    const payload = decodeToken(token)
    /** Check if token has not expired */
    if (moment().unix() < payload.exp) {
      res.clearCookie('token')
      return res.sendStatus(401)
    }

    /** Validate permis */
    if (token.role !== 'admin' && req.method !== 'get') {
      res.clearCookie('token')
      return res.sendStatus(401)
    }

    req.user = { name, role } = payload
    next()
  }
}
