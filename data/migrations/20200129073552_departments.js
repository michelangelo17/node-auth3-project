exports.up = knex =>
  knex.schema.createTable('departments', table => {
    table.increments('department_id')
    table
      .text('department')
      .unique()
      .index()
      .notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('departments')
