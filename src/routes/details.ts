import express from "express";
import detailsController from "../controllers/detailsController";

const detailsRouter = express.Router();

/* Gets a post's details. */
detailsRouter.get("/:id", detailsController);

export default detailsRouter;
