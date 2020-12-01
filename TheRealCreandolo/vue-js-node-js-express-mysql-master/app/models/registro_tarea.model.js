module.exports = (sequelize, Sequelize) => {
  const Registro_tarea = sequelize.define("registro_tarea", {
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
      type: Sequelize.DATE,allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  });

  return Registro_tarea;
};
