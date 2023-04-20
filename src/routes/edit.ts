import express from "express";
import { IMessage, MessageModel } from "../models/message";

const editRouter = express.Router();

/* Deletes a post. */
editRouter.get("/:id", async (req, res) => {
  // Gets id property with object destructuring
  const {
    params: { id },
  } = req;

  // Gets referrence to data in database
  const post = await MessageModel.findById(id);
  const { text, user } = post as IMessage;
  const title = "Mini Message Board | Add Message";

  res.render("form", { title, style: "form", text, user, id });
});

editRouter.put("/:id/updated", async (req, res) => {
  // Gets id property with object destructuring
  const {
    params: { id },
  } = req;

  // Gets input details
  const user = req.body.name;
  const text = req.body.message;

  console.log({ id, user, text });

  // Gets referrence to data in database
  await MessageModel.findByIdAndUpdate(id, { user, text });

  // Redirects to "/"
  res.redirect("/");
});

export default editRouter;
