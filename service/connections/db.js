//db connection
const knex = require('knex') ({
  client: 'pg',
  connection: {
    host: 'calentodo-testdatabase.clsa9ofihsho.us-east-2.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'calentodo'
  }
});

module.exports = knex;