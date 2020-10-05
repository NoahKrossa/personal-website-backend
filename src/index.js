/** Dependencies */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('morgan')

/** Use .env settings */
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

/** Initialize express app */
const app = express()

/** Using middlewares */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(logger('dev'))

/** Using indexRouter */
app.use('/', require('./rootRouter'))

/** Connect to mongodb */
require('./services/mongodb').conntect(process.env.MONGODB_URI)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Express server running in port ${PORT}`))
