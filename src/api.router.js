const express = require('express')
const APIRouter = express.Router()
const { auth } = require('./middlewares/auth.middleware')
const postController = require('./controllers/post.controller')
const userController = require('./controllers/user.controller')

/**
 ** Post routes
 * */
/** GET */
APIRouter.get('/post/all', auth, postController.getAllPosts)
APIRouter.get('/post/info', auth, postController.getPostInfo)
APIRouter.get('/post/:postId', auth, postController.getPostById)
/** POST */
// APIRouter.post('/post/add', auth, postController.addNewPost)
// /** PUT */
// APIRouter.patch('/post/update/:postId', auth, postController.updatePost)
// /** DELETE */
// APIRouter.delete('/post/remove/:postId', auth, postController.removePost)

/**
 ** User routes
 */
APIRouter.post('/user/auth', userController.authentificateUser)
APIRouter.get('/user/logout', userController.closeSession)

module.exports = APIRouter
