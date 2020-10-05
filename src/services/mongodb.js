const mongoose = require('mongoose')

/** Mongoose settings */
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

module.exports = {
  async conntect(uri) {
    try {
      await mongoose.connect(uri)
      console.log('Connected to mongodb database successfully!')
    } catch (e) {
      throw e
    }
  }
}
