import { mssgArr } from ".";
import express from "express";

const formRouter = express.Router();

/* GET user from for adding new message. */
formRouter.get("/", function (req, res) {
  res.render("form", { title: "Add Message" });
});

/* POST user's form inputs. */
formRouter.post("/", function (req, res) {
  // Gets input details
  const added = new Date();
  const user = req.body.name;
  const text = req.body.message;

  // Pushes the user input to mssgArr
  mssgArr.push({ user, text, added });

  // Redirects to "/"
  res.redirect("/");
});

export default formRouter;
