import { Request, Response } from "express";
import { MessageModel } from "../models/message";

async function indexController(req: Request, res: Response) {
  const title = "Mini Message Board";

  try {
    const mssgArr = await MessageModel.find().sort({
      createdAt: -1,
    });

    res.render("index", { mssgArr, style: "index", title });
  } catch (err) {
    console.log(err);
  }
}

export default indexController;
