const db = require("../models");
const Registro_tarea = db.registro_tarea;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.registro_tarea) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const registro_tarea = {
    CantidadPuntos: req.body.CantidadPuntos,
    Descripcion: req.body.Descripcion,
    Fecha: req.body.Fecha
  };

  // Save Tutorial in the database
  Registro_tarea.create(registro_tarea)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Registro tarea."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const register_tarea = req.query.register_tarea;
  var condition = register_tarea ? { register_tarea: { [Op.like]: `%${register_tarea}%` } } : null;

  Registro_tarea.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving registro tarea."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Registro_tarea.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Registro tarea with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Registro_tarea.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Registro tarea was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Registro tarea with id=${id}. Maybe Registro tarea was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Registro tarea with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Registro_tarea.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Registro tarea was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Registro tarea with id=${id}. Maybe Registro tarea was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Registro tarea with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Registro_tarea.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Registro tarea were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Registro tarea."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Registro_tarea.findAll({ where })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Registro tarea."
      });
    });
};
