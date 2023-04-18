import express from "express";
const indexRouter = express.Router();

const mssgArr = [
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
];

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express", mssgArr });
});

export default indexRouter;
