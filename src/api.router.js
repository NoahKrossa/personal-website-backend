const express = require('express')
const APIRouter = express.Router()
const postController = require('./controllers/post.controller')

/** POST ROUTES */
/** GET */
APIRouter.get('/post/all', postController.getAllPosts)

APIRouter.get('/test', (req, res) => {
  res.send('hello?')
})
/** POST */
/** PUT */
/** DELETE */

module.exports = APIRouter
