const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../../env')

const restrictedCheck = (req, res, next) => {
  const token = req.headers.authorization
  if (!req.session || !req.session.user) {
    res
      .status(401)
      .json({ message: 'You shall not pass!', loggedIn: false, token: false })
  }
  if (!token) {
    res
      .status(401)
      .json({ message: 'You shall not pass!', loggedIn: false, token: false })
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res
        .status(401)
        .json({ message: 'You shall not pass!', loggedIn: false, token: false })
    }
    req.decodedToken = decodedToken
  })
  console.log(req.decodedToken)
  next()
}
module.exports = { restrictedCheck }
