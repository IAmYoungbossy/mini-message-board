import express from "express";
import { MessageModel } from "../models/message";

const formRouter = express.Router();

/* GET user from for adding new message. */
formRouter.get("/", function (req, res) {
  const title = "Mini Message Board | Add Message";
  res.render("form", { title, style: "form" });
});

/* POST user's form inputs. */
formRouter.post("/", async (req, res) => {
  // Gets input details
  const user = req.body.name;
  const text = req.body.message;
  const Post = new MessageModel({ text, user });

  // Saves to MongoDb
  await Post.save();

  // Redirects to "/"
  res.redirect("/");
});

export default formRouter;
