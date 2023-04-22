import { Request, Response } from "express";
import { MessageModel } from "../models/message";

async function deleteController(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const post = await MessageModel.findById(id);
    post?.deleteOne();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}

export default deleteController;
