const express = require("express");
const {
  getHomePage,
  getKakarot,
  getABC,
} = require("../controllers/homeController");
const router = express.Router();
router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/kakarot", getKakarot);
module.exports = router;
