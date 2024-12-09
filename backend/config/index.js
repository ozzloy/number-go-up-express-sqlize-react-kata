const {
  NODE_ENV,
  PORT,
  DB_PROTOCOL: dialect,
  DB_USERNAME: username,
  DB_PASSWORD: password,
  DB_HOST: host,
  DB_DATABASE: database,
  DB_PORT: port,
  DB_SCHEMA: schema,
} = process.env;

const value = {
  environment: NODE_ENV || "development",
  port: PORT || 8000,
  db: {
    username,
    password,
    database,
    host: host || "localhost",
    port: port || 5432,
    dialect,
    schema,
  },
};

module.exports = value;
