const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios = require("./usuarios.model.js")(sequelize, Sequelize);
db.premios = require("./premios.model.js")(sequelize, Sequelize);
db.tareas = require("./tareas.model.js")(sequelize, Sequelize);
db.registro_tarea = require("./registro_tarea.model.js")(sequelize, Sequelize);
db.registro_premio = require("./registro_premio.model.js")(sequelize, Sequelize);

module.exports = db;
