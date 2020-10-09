const express = require('express')
const APIRouter = express.Router()
const postController = require('./controllers/post.controller')

/** GET */
APIRouter.get('/post/all', postController.getAllPosts)
APIRouter.get('/post/postId/:postId', postController.getPostById)
/** POST */
APIRouter.post('/post/add', postController.addNewPost)
/** PUT */
APIRouter.patch('/post/update/:postId', postController.updatePost)
/** DELETE */
APIRouter.delete('/post/remove/:postId', postController.removePost)

module.exports = APIRouter
