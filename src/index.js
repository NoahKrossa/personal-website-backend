/** Dependencies */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('morgan')
const config = require('./app.config')

/** Initialize express app */
const app = express()

/** Using middlewares */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(logger('dev'))

/** Using APIRouter */
app.use('/api', require('./api.router'))

/** Connect to mongodb */
require('./services/mongodb').conntect(config.mongodbURI)

const PORT = config.port
app.listen(PORT, () => console.log(`Express server running in port ${PORT}`))
