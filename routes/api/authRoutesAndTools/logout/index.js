const router = require('express-promise-router')()

module.exports = router

router.get('/', (req, res) => {
  const user = req.session.user
  req.session &&
    req.session.destroy(err => {
      if (err) {
        return res.json({
          message: 'Logout unsuccessful, please try again!',
          loggedIn: true,
          token: false,
        })
      }
      if (user) {
        return res.json({
          message: `${user.username} logged out!`,
          loggedIn: false,
          token: false,
        })
      }
      res.json({
        message: 'No user to logoout!',
        loggedIn: false,
        token: false,
      })
    })
})

router.use((err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message,
    loggedIn: true,
    token: false,
  })
)
