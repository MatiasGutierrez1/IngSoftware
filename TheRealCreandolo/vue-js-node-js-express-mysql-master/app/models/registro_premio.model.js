module.exports = (sequelize, Sequelize) => {
  const Registro_premio = sequelize.define("registro_premio", {
    id: {
      type: Sequelize.INTEGER, primaryKey: true
    },
    CantidadPuntos: {
      type: Sequelize.INTEGER
    },
    Descripcion: {
      type: Sequelize.STRING
    },
    Fecha: {
      type: Sequelize.DATE, allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  });

  return Registro_premio;
};
