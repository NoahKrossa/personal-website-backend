module.exports = {
  port: process.env.PORT || 8080,
  mongodbURI: process.env.MONGO_URI || 'mongodb://localhost:27017/my_demo_db',
  secretTOKEN: process.env.SECRET_TOKEN || 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
  adminKey: process.env.ADMIN_KEY || '$2y$12$AjYl4dIjz3wY8/.iJd1jZ.p9FMAnYSzr0XURHCNwHQbdG.8s/Esvm'
}
