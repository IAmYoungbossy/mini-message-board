import { DateTime } from "luxon";
import express from "express";

const indexRouter = express.Router();

export const mssgArr = [
  {
    text: "Hi there!",
    user: "Amando",
    added: DateTime.fromJSDate(new Date()).toLocaleString(
      DateTime.DATE_MED
    ),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: DateTime.fromJSDate(new Date()).toLocaleString(
      DateTime.DATE_MED
    ),
  },
  {
    text: "I'm thinking too much!",
    user: "Letam Barinua",
    added: DateTime.fromJSDate(new Date()).toLocaleString(
      DateTime.DATE_MED
    ),
  },
];

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", mssgArr });
});

export default indexRouter;
