const express = require("express");
const app = express();

// required middlewares
const passport = require("passport");
// mongoose
const mongoose = require("mongoose");
// routers
const routers = require("./routes/routers-package");
const { indexRouter } = routers;
// port
var port = process.env.PORT || "8080";

// middleware use
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log("server on");
});
