const express = require("express");
const router = express.Router();

const cart = require("../controllers/cart.controller");

router.get("/", cart.findAll); //

router.get("/:id", cart.findOne); //

router.post("/", cart.create); //

router.put("/:id", cart.update); //

router.delete("/:id", cart.delete); //

module.exports = router;
