import express from "express";
import deleteController from "../controllers/deleteController";

const deleteRouter = express.Router();

/* Deletes a post. */
deleteRouter.get("/:id", deleteController);

export default deleteRouter;
