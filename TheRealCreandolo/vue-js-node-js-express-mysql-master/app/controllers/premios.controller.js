const db = require("../models");
const Premios = db.premios;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.premios) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const premios = {
    id: req.body.id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    puntos: req.body.nuntos,
    disponibilidad: req.body.disponibilidad ? req.body.disponibilidad : false
  };

  // Save Tutorial in the database
  Premios.create(premios)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Premios."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const premio = req.query.premio;
  var condition = premio ? { premio: { [Op.like]: `%${premio}%` } } : null;

  Premios.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving premios."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Premios.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Premios with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Premios.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Premios was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Premios with id=${id}. Maybe Premios was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Premios with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Premios.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Premios was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Premios with id=${id}. Maybe Premios was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Premios with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Premios.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Premios were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all premios."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Premios.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving premios."
      });
    });
};
