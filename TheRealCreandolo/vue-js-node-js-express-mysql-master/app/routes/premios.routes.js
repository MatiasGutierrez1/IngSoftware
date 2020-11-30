module.exports = app => {
  const premios = require("../controllers/premios.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", premios.create);

  // Retrieve all Tutorials
  router.get("/", premios.findAll);

  // Retrieve all published Tutorials
  router.get("/published", premios.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", premios.findOne);

  // Update a Tutorial with id
  router.put("/:id", premios.update);

  // Delete a Tutorial with id
  router.delete("/:id", premios.delete);

  // Delete all Tutorials
  router.delete("/", premios.deleteAll);

  app.use('/api/premios', router);
};
