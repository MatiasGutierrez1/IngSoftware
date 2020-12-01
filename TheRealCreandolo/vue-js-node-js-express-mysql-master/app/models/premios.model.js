module.exports = (sequelize, Sequelize) => {
  const Premios = sequelize.define("premios", {
    id: {
      type: Sequelize.INTEGER, primaryKey: true
    },
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
