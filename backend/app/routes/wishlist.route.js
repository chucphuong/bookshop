const express = require("express");
const router = express.Router();

const wishlist = require("../controllers/wishlist.controller");

router.get("/", wishlist.findAll); //

router.get("/:id", wishlist.findOne); //

router.post("/", wishlist.create); //

router.put("/:id", wishlist.update); //

router.delete("/:id", wishlist.delete); //

module.exports = router;
