const router = require('express-promise-router')()
const { valRegisterBody, hashPassword } = require('./middleware')
const db = require('./model')
const { generateToken } = require('../authTools')

module.exports = router

router.post('/', valRegisterBody, hashPassword, async (req, res) => {
  const { username } = await db.addUser(req.body)
  const token = generateToken(req.session.user)
  req.session.user = username
  res.status(201).json({
    message: `${username} successfully created!`,
    loggedIn: true,
    token: token,
  })
})

router.use((err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message.replace(/\\/g, ''),
  })
)
