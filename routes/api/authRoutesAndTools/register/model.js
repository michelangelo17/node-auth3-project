const db = require('../../../../data/dbConfig')

const addUser = async newUser =>
  (await db('users').insert(newUser, ['username']))[0]

module.exports = { addUser }
