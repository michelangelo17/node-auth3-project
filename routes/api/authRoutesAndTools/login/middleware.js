const bcrypt = require('bcryptjs')
const { findUser } = require('./model')

const valLoginBody = (req, res, next) => {
  if (!req.body.username && !req.body.password) {
    throw new Error('Must send both a username and a password')
  }
  if (!req.body.username) {
    throw new Error('Must send a username')
  }
  if (!req.body.password) {
    throw new Error('Must send a password')
  }
  next()
}

const validatePassword = async (req, res, next) => {
  const user = await findUser(req.body.username)
  if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
    return res
      .status(401)
      .json({ message: 'You shall not pass!', loggedIn: false })
  }
  req.session.user = {
    subject: user.user_id,
    username: user.username,
    department_id: user.department_id,
  }
  next()
}

module.exports = { valLoginBody, validatePassword }
