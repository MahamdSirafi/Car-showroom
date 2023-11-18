const carController = require("../controllers/carConteroller");
const express = require("express");
const router = express.Router();
router.route("/").get(carController.getAllcar).post(carController.createcar);
router
  .route("/:id")
  .get(carController.getcar)
  .patch(carController.updatecar)
  .delete(carController.deletecar);
module.exports = router;
