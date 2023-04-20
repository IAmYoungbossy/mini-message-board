import express from "express";
import formControllerPost, {
  formControllerGet,
} from "../controllers/formController";

const formRouter = express.Router();

/* GET user from for adding new message. */
formRouter.get("/", formControllerGet);

/* POST user's form inputs. */
formRouter.post("/", formControllerPost);

export default formRouter;
