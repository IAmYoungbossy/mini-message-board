import { Request, Response } from "express";
import { MessageModel } from "../models/message";

async function indexController(req: Request, res: Response) {
  const title = "Mini Message Board";
  const mssgArr = await MessageModel.find().sort({
    createdAt: -1,
  });

  res.render("index", { mssgArr, style: "index", title });
}

export default indexController;
