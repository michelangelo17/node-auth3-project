exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('user_id')
    table
      .text('username')
      .unique()
      .index()
      .notNullable()
    table
      .text('password')
      .unique()
      .notNullable()
    table
      .integer('department_id')
      .unsigned()
      .references('departments.department_id')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      .notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('users')
