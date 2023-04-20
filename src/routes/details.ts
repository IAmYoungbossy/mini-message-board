import express from "express";
import { IMessage, MessageModel } from "../models/message";

const detailsRouter = express.Router();

/* Deletes a post. */
detailsRouter.get("/:id", async (req, res) => {
  // Gets id property with object destructuring
  const {
    params: { id },
  } = req;

  // Gets referrence to data in database
  const post = await MessageModel.findById(id);

  const { text, user, date, updated } = post as IMessage;

  const title = "Mini Message Board | Details";

  res.render("details", {
    id,
    date,
    user,
    text,
    title,
    updated,
    style: "details",
  });
});

export default detailsRouter;
