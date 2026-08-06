const express = require("express");
const router = express.Router();

const publisher = require("../controllers/publisher.controller");

router.get("/", publisher.findAll); //

router.get("/:id", publisher.findOne); //

router.post("/", publisher.create); //

router.put("/:id", publisher.update); //

router.delete("/:id", publisher.delete); //

module.exports = router;
