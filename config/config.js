require('dotenv').config();

const sharedConfig = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || null,
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT, 10) || 3307,
  dialect: process.env.DB_DIALECT || 'mysql',
};

module.exports = {
  development: {
    ...sharedConfig,
    database: process.env.DB_NAME || 'tienda_virtual',
  },
  test: {
    ...sharedConfig,
    database: process.env.DB_TEST_NAME || 'database_test',
  },
  production: {
    ...sharedConfig,
    database: process.env.DB_PROD_NAME || 'database_production',
  },
};
