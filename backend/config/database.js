const config = require("./index");

const value = {
  development: {
    ...config.db,
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true,
    define: {
      schema: config.db.schema,
    },
  },
  production: {
    ...config.db,
    seederStorage: "sequelize",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      schema: config.db.schema,
    },
  },
};

module.exports = value;
