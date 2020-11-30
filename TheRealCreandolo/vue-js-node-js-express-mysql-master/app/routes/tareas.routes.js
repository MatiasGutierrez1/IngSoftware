module.exports = app => {
  const tareas = require("../controllers/tareas.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tareas.create);

  // Retrieve all Tutorials
  router.get("/", tareas.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tareas.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tareas.findOne);

  // Update a Tutorial with id
  router.put("/:id", tareas.update);

  // Delete a Tutorial with id
  router.delete("/:id", tareas.delete);

  // Delete all Tutorials
  router.delete("/", tareas.deleteAll);

  app.use('/api/tareas', router);
};
