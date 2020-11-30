const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.usuarios) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const usuarios = {
    TipoU: req.body.TipoU,
    Nombre : req.body.Nombre,
    Rut: req.body.Rut,
    Clave: req.body.Clave,
    Telefono: req.body.Telefono,
    Correo: req.body.Correo,
    Puntos: req.body.Puntos
  };

  // Save Tutorial in the database
  Usuarios.create(usuarios)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuarios."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const user = req.query.user;
  var condition = user ? { user: { [Op.like]: `%${user}%` } } : null;

  Usuarios.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuarios.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Usuarios with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Usuarios.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuarios was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Usuarios with id=${id}. Maybe Usuarios was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Usuarios with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuarios.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuarios was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Usuarios with id=${id}. Maybe Usuarios was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Usuarios with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Usuarios.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Usuario were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all usuarios."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Usuarios.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios."
      });
    });
};
