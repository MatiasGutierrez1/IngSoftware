module.exports = (sequelize, Sequelize) => {
  const Premios = sequelize.define("premios", {
    Nombre: {
      type: Sequelize.STRING
    },
    Descripcion: {
      type: Sequelize.STRING
    },
    Puntos: {
      type: Sequelize.INTEGER
    },
    Disponibilidad: {
      type: Sequelize.BOOLEAN
    }
  });

  return Premios;
};
