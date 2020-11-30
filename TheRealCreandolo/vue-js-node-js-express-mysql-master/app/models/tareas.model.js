module.exports = (sequelize, Sequelize) => {
  const Tareas = sequelize.define("tareas", {
    Nombre: {
      type: Sequelize.STRING
    },
    Prioridad: {
      type: Sequelize.STRING
    },
    Descripcion: {
      type: Sequelize.STRING
    },
    Puntos: {
      type: Sequelize.INTEGER
    },
    Estado: {
      type: Sequelize.STRING
    },
    FechaLimite: {
      type: Sequelize.DATE
    }
  });

  return Tareas;
};
