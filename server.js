const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);
const PORT = process.env.PORT || 5000;

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home");
});

http.listen(PORT, () => console.log(`Listening on ${PORT}`));
