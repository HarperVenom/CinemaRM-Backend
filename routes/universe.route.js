const express = require("express");
const {
  getUniverses,
  getUniverse,
} = require("../controllers/universe.controller");
const router = express.Router();

router.get("/", getUniverses);
router.get("/:id", getUniverse);

module.exports = router;
