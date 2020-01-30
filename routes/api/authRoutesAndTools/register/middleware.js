const bcrypt = require('bcryptjs')

const hashPassword = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 14)
  next()
}

const valRegisterBody = (req, res, next) => {
  if (!req.body.username && !req.body.password && !req.body.department_id) {
    throw new Error('Must send a username, a password and a department_id!')
  }
  if (!req.body.username) {
    throw new Error('Must send a username!')
  }
  if (!req.body.password) {
    throw new Error('Must send a password!')
  }
  if (!req.body.department_id) {
    throw new Error('Must send a department_id!')
  }
  next()
}

module.exports = { hashPassword, valRegisterBody }
