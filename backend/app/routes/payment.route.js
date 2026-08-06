const express = require("express");
const router = express.Router();

const payment = require("../controllers/payment.controller");

router.get("/", payment.findAll); //

router.get("/:id", payment.findOne); //

router.post("/", payment.create); //

router.put("/:id", payment.update); //

router.delete("/:id", payment.delete); //

module.exports = router;
