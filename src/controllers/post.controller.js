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

module.exports = {
  getAllPosts
}
