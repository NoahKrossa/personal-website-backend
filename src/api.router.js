const express = require('express')
const APIRouter = express.Router()

APIRouter.get('/', (req, res) => {
  res.send('hello world from API!')
})

module.exports = APIRouter
