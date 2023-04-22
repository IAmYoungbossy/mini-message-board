import { Request, Response } from "express";
import { IMessage, MessageModel } from "../models/message";

async function detailsController(req: Request, res: Response) {
  const { id } = req.params;
  const title = "Mini Message Board | Details";

  try {
    const post = await MessageModel.findById(id);
    const { text, user, date, updated } = post as IMessage;

    res.render("details", {
      id,
      date,
      user,
      text,
      title,
      updated,
      style: "details",
    });
  } catch (err) {
    console.log(err);
  }
}

export default detailsController;
