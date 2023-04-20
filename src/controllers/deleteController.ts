import { Request, Response } from "express";
import { MessageModel } from "../models/message";

async function deleteController(req: Request, res: Response) {
  const { id } = req.params;
  const post = await MessageModel.findById(id);

  post?.deleteOne();
  res.redirect("/");
}

export default deleteController;
