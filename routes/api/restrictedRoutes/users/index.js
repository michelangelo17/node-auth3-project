const router = require('express-promise-router')()
const db = require('./model')

module.exports = router

router.get('/', async (req, res) => {
  const { department_id } = req.decodedToken
  const userArray = await db.getUsers(department_id)
  res.json(userArray)
})

router.use((err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message.replace(/\\/g, ''),
  })
)
