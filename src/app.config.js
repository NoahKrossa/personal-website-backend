module.exports = {
  port: process.env.PORT || 8080,
  mongodbURI: process.env.MONGO_URI || 'mongodb://localhost:27017/my_demo_db'
}
