const express = require("express");
const router = express.Router();

const category = require("../controllers/category.controller");

router.get("/", category.findAll); //

router.get("/:id", category.findOne); //

router.post("/", category.create); //

router.put("/:id", category.update); //

router.delete("/:id", category.delete); //

module.exports = router;
