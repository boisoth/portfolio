const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);
const PORT = process.env.PORT || 8080;
const htmlRoutes = require("./routes/html-routes");

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));
app.use(htmlRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});

http.listen(PORT, () => console.log(`Listening on ${PORT}`));
