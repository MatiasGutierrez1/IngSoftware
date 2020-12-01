module.exports = (sequelize, Sequelize) => {
  const Usuarios = sequelize.define("usuarios", {
    id:{
      type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
    },
    TipoU: {
      type: Sequelize.STRING
    },
    Nombre: {
      type: Sequelize.STRING
    },
    Rut: {
      type: Sequelize.STRING, Unique: true
    },
    Clave: {
      type: Sequelize.STRING
    },
    Telefono: {
      type: Sequelize.STRING
    },
    Correo: {
      type: Sequelize.STRING
    },
    Puntos: {
      type: Sequelize.INTEGER
    },
  });

  return Usuarios;
};
