import express from "express";
const indexRouter = express.Router();

export const mssgArr = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "I'm thinking too much!",
    user: "Letam Barinua",
    added: new Date(),
  },
];

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", mssgArr });
});

export default indexRouter;
