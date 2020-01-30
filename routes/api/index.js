const router = require('express-promise-router')()
const authRouter = require('./authRoutesAndTools')

const restrictedRouter = require('./restrictedRoutes')

module.exports = [router.use(authRouter), router.use(restrictedRouter)]
