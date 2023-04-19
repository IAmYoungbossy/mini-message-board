import { DateTime } from "luxon";
import express from "express";
import { MessageModel } from "../models/message";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", async (req, res) => {
  const title = "Mini Message Board";
  const mssgArr = await MessageModel.find().sort({
    createdAt: -1,
  });

  res.render("index", { mssgArr, style: "index", title });
});

export default indexRouter;
