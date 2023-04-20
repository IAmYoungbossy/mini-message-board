import { Request, Response } from "express";
import { MessageModel } from "../models/message";

export function formControllerGet(req: Request, res: Response) {
  const title = "Mini Message Board | Add Message";
  res.render("form", { title, style: "form" });
}

async function formControllerPost(req: Request, res: Response) {
  // Gets input details
  const user = req.body.name;
  const text = req.body.message;
  const Post = new MessageModel({ text, user });

  await Post.save();
  res.redirect("/");
}

export default formControllerPost;
