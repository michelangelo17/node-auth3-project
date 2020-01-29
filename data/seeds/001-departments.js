exports.seed = knex =>
  knex('departments')
    .del()
    .then(() =>
      knex('departments').insert([
        {
          department: 'Movies',
        },
        {
          department: 'Home',
        },
        {
          department: 'Clothing',
        },
        {
          department: 'Garden',
        },
        {
          department: 'Books',
        },
        {
          department: 'Computers',
        },
        {
          department: 'Health',
        },
        {
          department: 'Industrial',
        },
        {
          department: 'Baby',
        },
        {
          department: 'Entertainment',
        },
      ])
    )
