module.exports = app => {
    const address = require("../controllers/address.controller.js");
    var router = require("express").Router();
    // Create a new Address
    router.post("/", address.create);
    // Retrieve all Address
    router.get("/", address.findAll);
    // Retrieve all published Address
    router.get("/zip/:zip", address.findAllZipCode);
    // Retrieve a single Address with id
    router.get("/:id", address.findOne);
    // Update a Address with id
    router.put("/:id", address.update);
    // Delete a Address with id
    router.delete("/:id", address.delete);
    // Create a new Address
    router.delete("/", address.deleteAll);
    app.use('/api/address', router);
  };