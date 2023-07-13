require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'database_development',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
