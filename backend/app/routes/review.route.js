const express = require("express");
const router = express.Router();

const review = require("../controllers/review.controller");

router.get("/", review.findAll); //

router.get("/:id", review.findOne); //

router.post("/", review.create); //

router.put("/:id", review.update); //

router.delete("/:id", review.delete); //

module.exports = router;
