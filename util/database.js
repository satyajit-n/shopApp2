const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "root", {
  dialect: "mysql",
  host: "Localhost",
});

module.exports = sequelize;