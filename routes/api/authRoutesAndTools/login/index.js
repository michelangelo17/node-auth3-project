const router = require('express-promise-router')()
const { valLoginBody, validatePassword } = require('./middleware')
const { generateToken } = require('../authTools')

module.exports = router

router.post('/', valLoginBody, validatePassword, (req, res) => {
  const token = generateToken(req.session.user)
  res.json({
    message: `${req.session.user.username} logged in!`,
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
