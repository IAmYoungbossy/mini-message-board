import express from "express";
import editControllerGet, {
  editControllerPut,
} from "../controllers/editController";

const editRouter = express.Router();

/* Gets edit page. */
editRouter.get("/:id", editControllerGet);

/** Saves edited post */
editRouter.put("/:id/updated", editControllerPut);

export default editRouter;
