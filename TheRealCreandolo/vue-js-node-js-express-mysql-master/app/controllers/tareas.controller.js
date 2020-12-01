const db = require("../models");
const Tareas = db.tareas;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.tareas) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tareas = {
    id: req.body.id,
    Nombre: req.body.Nombre,
    Prioridad: req.body.Prioridad,
    Descripcion: req.body.Descripcion,
    Puntos: req.body.Puntos,
    Estado: req.body.Estado,
    FechaLimite: req.body.FechaLimite
  };

  // Save Tutorial in the database
  Tareas.create(tareas)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tareas."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const tarea = req.query.tarea;
  var condition = tarea ? { tarea: { [Op.like]: `%${tarea}%` } } : null;

  Tareas.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tareas."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tareas.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tareas with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tareas.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tareas was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tareas with id=${id}. Maybe Tareas was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tareas with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tareas.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tareas was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tareas with id=${id}. Maybe Tareas was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tareas with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tareas.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tareas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tareas."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tareas.findAll({ where })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tarea."
      });
    });
};
