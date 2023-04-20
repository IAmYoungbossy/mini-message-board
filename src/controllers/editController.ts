import { Request, Response } from "express";
import { IMessage, MessageModel } from "../models/message";

async function editControllerGet(req: Request, res: Response) {
  const { id } = req.params;
  const post = await MessageModel.findById(id);
  const { text, user } = post as IMessage;
  const title = "Mini Message Board | Add Message";

  res.render("form", { title, style: "form", text, user, id });
}

export async function editControllerPut(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const user = req.body.name;
  const text = req.body.message;

  // Gets referrence to data in database
  await MessageModel.findByIdAndUpdate(id, { user, text });

  res.redirect("/");
}

export default editControllerGet;
