const { sequelize } = require("./db/models");

sequelize.showAllSchemas({ logging: false }).then(async (data) => {
  if (!data.includes(process.env.DB_SCHEMA)) {
    await sequelize.createSchema(process.env.DB_SCHEMA);
  }
});
