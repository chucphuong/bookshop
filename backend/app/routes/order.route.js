const express = require("express");
const router = express.Router();

const order = require("../controllers/order.controller");

router.get("/", order.findAll); //

router.get("/:id", order.findOne); //

router.post("/", order.create); //

router.put("/:id", order.update); //

router.delete("/:id", order.delete); //

module.exports = router;
