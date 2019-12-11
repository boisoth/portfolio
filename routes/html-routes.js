const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { path: "/", title: "About" });
});

router.get("/resume", (req, res) => {
  res.render("resume", { path: "/resume", title: "Resume" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { path: "/contact", title: "Contact" });
});

module.exports = router;
