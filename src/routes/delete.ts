import express from "express";
import { MessageModel } from "../models/message";

const deleteRouter = express.Router();

/* Deletes a post. */
deleteRouter.get("/:id", async (req, res) => {
  // Gets id property with object destructuring
  const {
    params: { id },
  } = req;

  // Gets referrence to data in database
  const post = await MessageModel.findById(id);

  // Calls delete method
  post?.deleteOne();

  // Redirects to "/"
  res.redirect("/");
});

export default deleteRouter;
