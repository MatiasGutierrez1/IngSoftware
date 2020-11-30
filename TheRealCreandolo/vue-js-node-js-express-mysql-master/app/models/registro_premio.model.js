module.exports = (sequelize, Sequelize) => {
  const Registro_premio = sequelize.define("registro_premio", {
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

  return Registro_premio;
};
