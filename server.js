const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);
const PORT = process.env.PORT || 5000;
const htmlRoutes = require("./routes/html-routes");

app.set("view engine", "pug");
app.set("views", "views");

app.use(htmlRoutes);

http.listen(PORT, () => console.log(`Listening on ${PORT}`));
