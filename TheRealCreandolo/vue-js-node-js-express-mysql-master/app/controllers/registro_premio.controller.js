const db = require("../models");
const Registro_premio = db.registro_premio;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.registro_premio) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const registro_premio = {
    CantidadPuntos: req.body.CantidadPuntos,
    Descripcion: req.body.Descripcion,
    Fecha: req.body.Fecha
  };

  // Save Tutorial in the database
  Registro_premio.create(registro_premio)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Registro premio."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const register_premio = req.query.register_premio;
  var condition = register_premio ? { register_premio: { [Op.like]: `%${register_premio}%` } } : null;

  Registro_premio.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Registro premio."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Registro_premio.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Registro premio with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Registro_premio.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Registro premio was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Registro premio with id=${id}. Maybe Registro premio was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Registro premio with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Registro_premio.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Registro premio was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Registro premio with id=${id}. Maybe Registro premio was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Registro premio with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Registro_premio.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Registro premio were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Registro premio."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Registro_premio.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Registro premio."
      });
    });
};
