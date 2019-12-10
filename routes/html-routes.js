const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { path: "/" });
});

router.get("/resume", (req, res) => {
  res.render("resume", { path: "/resume" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { path: "/contact" });
});

module.exports = router;
