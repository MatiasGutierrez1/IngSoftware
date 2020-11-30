module.exports = app => {
  const registro_tarea = require("../controllers/registro_tarea.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", registro_tarea.create);

  // Retrieve all Tutorials
  router.get("/", registro_tarea.findAll);

  // Retrieve all published Tutorials
  router.get("/published", registro_tarea.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", registro_tarea.findOne);

  // Update a Tutorial with id
  router.put("/:id", registro_tarea.update);

  // Delete a Tutorial with id
  router.delete("/:id", registro_tarea.delete);

  // Delete all Tutorials
  router.delete("/", registro_tarea.deleteAll);

  app.use('/api/registro_tarea', router);
};
