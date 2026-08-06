const express = require("express");
const router = express.Router();

const role = require("../controllers/role.controller");

router.get("/", role.findAll); //

router.get("/:id", role.findOne); //

router.post("/", role.create); //

router.put("/:id", role.update); //

router.delete("/:id", role.delete); //

module.exports = router;
