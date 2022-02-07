const express = require("express");
const app = express();

// required middlewares
// const passport = require("passport");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

// mongoose
const mongoose = require("mongoose");

// routers
const routers = require("./routes/routers-package");
const { indexRouter, userRouter } = routers;
// port
var port = process.env.PORT || "8080";

// middleware use
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
dotenv.config();

app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server on, port ${port}`);
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB connected...");
});
