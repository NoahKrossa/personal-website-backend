module.exports = {
  port: process.env.PORT || 8080,
  mongodbURI: process.env.MONGO_URI || 'mongodb://localhost:27017/my_demo_db',
  secretTOKEN: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
}
