import express from "express";
const formRouter = express.Router();

/* GET users listing. */
formRouter.get("/", function (req, res, next) {
  res.render("form", { title: "Add Message" });
});

export default formRouter;
