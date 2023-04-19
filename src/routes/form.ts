import express from "express";
import { DateTime } from "luxon";
import { mssgArr } from "./index";

const formRouter = express.Router();

/* GET user from for adding new message. */
formRouter.get("/", function (req, res) {
  const title = "Mini Message Board | Add Message";
  res.render("form", { title, style: "form" });
});

/* POST user's form inputs. */
formRouter.post("/", function (req, res) {
  // Gets input details
  const user = req.body.name;
  const text = req.body.message;
  const added = DateTime.fromJSDate(new Date()).toLocaleString(
    DateTime.DATE_MED
  );

  // Pushes the user input to mssgArr
  mssgArr.push({ user, text, added });

  // Redirects to "/"
  res.redirect("/");
});

export default formRouter;
