import { Request, Response } from "express";
import { IMessage, MessageModel } from "../models/message";

async function detailsController(req: Request, res: Response) {
  const { id } = req.params;
  const post = await MessageModel.findById(id);
  const title = "Mini Message Board | Details";
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
}

export default detailsController;
