module.exports = app => {
  const registro_premio = require("../controllers/registro_premio.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", registro_premio.create);

  // Retrieve all Tutorials
  router.get("/", registro_premio.findAll);

  // Retrieve all published Tutorials
  router.get("/published", registro_premio.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", registro_premio.findOne);

  // Update a Tutorial with id
  router.put("/:id", registro_premio.update);

  // Delete a Tutorial with id
  router.delete("/:id", registro_premio.delete);

  // Delete all Tutorials
  router.delete("/", registro_premio.deleteAll);

  app.use('/api/registro_premio', router);
};
