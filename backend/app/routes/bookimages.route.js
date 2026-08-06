const express = require("express");
const router = express.Router();

const bookImageController = require("../controllers/bookimages.controller");

router.get("/", bookImageController.findAll); //

router.get("/:id", bookImageController.findOne); //

router.post("/", bookImageController.create); //

router.put("/:id", bookImageController.update); //

router.delete("/:id", bookImageController.delete); //

module.exports = router;
