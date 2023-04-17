import express from "express";
const formRouter = express.Router();

/* GET users listing. */
formRouter.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default formRouter;
