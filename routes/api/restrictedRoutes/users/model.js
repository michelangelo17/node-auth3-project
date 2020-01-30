const db = require('../../../../data/dbConfig')

const getUsers = async d_id =>
  await db
    .select('username', 'department')
    .from('departments AS d')
    .innerJoin('users AS u', 'd.department_id', 'u.department_id')
    .where('d.department_id', d_id)

module.exports = { getUsers }
