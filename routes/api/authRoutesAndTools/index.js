const router = require('express-promise-router')()
const registerRouter = require('./register')
const loginRouter = require('./login')
const logoutRouter = require('./logout')

module.exports = [
  router.use('/register', registerRouter),
  router.use('/login', loginRouter),
  router.use('/logout', logoutRouter),
]
