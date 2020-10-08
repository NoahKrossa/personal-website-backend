const Post = require('../models/post.model')

/** GET */
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    if (!posts) {
      console.log('not fetched data')
      return res.sendStatus(404)
    }
    res.status(200).json(posts)
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

const getPostById = async (req, res) => {
  const { postId } = req.params
  try {
    const post = await Post.findOne({ publicId: postId }).exec()

    if (!post) {
      console.log('Not found post')
      return res.sendStatus(404)
    }
    res.json(post)
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

/** POST */
const addNewPost = async (req, res) => {
  const postData = req.body
  try {
    const doc = await Post.create(postData)
    res.json({
      message: 'Added new post',
      doc
    })
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  addNewPost
}
