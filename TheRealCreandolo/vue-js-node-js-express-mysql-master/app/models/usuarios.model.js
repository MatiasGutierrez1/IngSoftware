module.exports = (sequelize, Sequelize) => {
  const Usuarios = sequelize.define("usuarios", {
    TipoU: {
      type: Sequelize.STRING
    },
    Nombre: {
      type: Sequelize.STRING
    },
    Rut: {
      type: Sequelize.STRING
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
    }
  });

  return Usuarios;
};
