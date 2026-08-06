const express = require("express");
const router = express.Router();

const orderdetail = require("../controllers/orderdetail.controller");

router.get("/", orderdetail.findAll); //

router.get("/:id", orderdetail.findOne); //

router.post("/", orderdetail.create); //

router.put("/:id", orderdetail.update); //

router.delete("/:id", orderdetail.delete); //

module.exports = router;
