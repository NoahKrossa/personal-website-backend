/** Dependencies */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

/** Use .env settings */
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

/** Initialize express app */
const app = express()

/** Using indexRouter */
app.use('/', require('./rootRouter'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Express server running in port ${PORT}`))
