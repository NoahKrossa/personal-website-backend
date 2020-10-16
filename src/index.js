/** Dependencies */
const express = require('express')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const config = require('./app.config')
const { resolve } = require('path')

/** Initialize express app */
const app = express()

/** Using middlewares */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())
app.use(logger('dev'))

//Set static
app.use(express.static(resolve(__dirname, 'dist')))

/** Using APIRouter */
app.use('/api', require('./api.router'))

// Serve client app
app.get('/*', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist', 'index.html'))
})

/** Connect to mongodb */
require('./services/mongodb').conntect(config.mongodbURI)

const PORT = config.port
app.listen(PORT, () => console.log(`Express server running in port ${PORT}`))
