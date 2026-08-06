const express = require("express");
const router = express.Router();

const author = require("../controllers/author.controller");

router.get("/", author.findAll); //

router.get("/:id", author.findOne); //

router.post("/", author.create); //

router.put("/:id", author.update); //

router.delete("/:id", author.delete); //

module.exports = router;
