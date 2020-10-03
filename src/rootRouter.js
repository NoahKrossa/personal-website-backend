const express = require('express')
const indexRouter = express.Router()
const { resolve } = require('path')

/** Serve client app */
indexRouter.get(/^\/((?!api).)*[(\/)(\/.+)]?$/, (req, res) => {
  res.sendFile(resolve(__dirname, 'public', 'index.html'))
})

/** Use API router */
indexRouter.use(/^\/(api)(\/)?(\/.+)?$/, require('./api.router'))

module.exports = indexRouter
