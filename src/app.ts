import path from "path";
import logger from "morgan";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import express, { ErrorRequestHandler } from "express";

import formRouter from "./routes/form";
import editRouter from "./routes/edit";
import indexRouter from "./routes/index";
import deleteRouter from "./routes/delete";

const app = express();

// view engine setup
app.set("views", path.resolve("src", "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve("src", "public")));

app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/edit", editRouter);
app.use("/delete", deleteRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

const errorHandler = ((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error =
    req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
}) as ErrorRequestHandler;

// error handler
app.use(errorHandler);

export default app;
