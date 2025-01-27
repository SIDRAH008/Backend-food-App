var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users.js");
var foodRouter = require("./routes/foodRoutes.js");
const { mongoose } = require("mongoose");
const mongoUri =
  "mongodb+srv://food:food@food.2a4cwmz.mongodb.net/foodswipe?retryWrites=true&w=majority";

mongoose
  .connect(mongoUri)
  .then(async () => {
    console.log("Connect to Mongoose");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();

app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/foods", foodRouter);
app.use(cors());

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
