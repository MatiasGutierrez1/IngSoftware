module.exports = (sequelize, Sequelize) => {
  const Registro_tarea = sequelize.define("registro_tarea", {
    CantidadPuntos: {
      type: Sequelize.INTEGER
    },
    Descripcion: {
      type: Sequelize.STRING
    },
    Fecha: {
      type: Sequelize.DATE
    }
  });

  return Registro_tarea;
};
