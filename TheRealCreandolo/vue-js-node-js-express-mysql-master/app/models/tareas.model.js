module.exports = (sequelize, Sequelize) => {
  const Tareas = sequelize.define("tareas", {
    id:{
      type: Sequelize.INTEGER, primaryKey: true
    },
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
