const express = require("express");
path = require("path");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");
const morgan = require("morgan");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);

module.exports = app;