const router = require('express-promise-router')()
const { restrictedCheck } = require('./middleware')
const usersRouter = require('./users')

module.exports = router

router.use(restrictedCheck)

router.use('/users', usersRouter)
