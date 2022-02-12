const express = require("express");
const app = express();

// required middlewares
// const passport = require("passport");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");

// mongoose
const mongoose = require("mongoose");

// routers
const routers = require("./routes/routers-package");
const { indexRouter, userRouter, postRouter, commentRouter } = routers;
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
app.use("/post", postRouter);
app.use("/images", express.static(path.join(__dirname, "/public/images")));

app.listen(port, () => {
  console.log(`server on, port ${port}`);
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB connected...");
});
