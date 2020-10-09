const express = require('express')
const APIRouter = express.Router()
const postController = require('./controllers/post.controller')
const userController = require('./controllers/user.controller')

/**
 ** Post routes
 * */
/** GET */
APIRouter.get('/post/all', postController.getAllPosts)
APIRouter.get('/post/postId/:postId', postController.getPostById)
/** POST */
APIRouter.post('/post/add', postController.addNewPost)
/** PUT */
APIRouter.patch('/post/update/:postId', postController.updatePost)
/** DELETE */
APIRouter.delete('/post/remove/:postId', postController.removePost)

/**
 ** User routes
 */
APIRouter.post('/user/create', userController.createUser)

module.exports = APIRouter
