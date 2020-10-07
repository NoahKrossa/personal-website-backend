module.exports = {
  port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  dbName: 'my_db',
  mongodbURI: process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/'
}
