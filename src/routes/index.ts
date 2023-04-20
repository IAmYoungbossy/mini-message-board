import express from "express";
import indexController from "../controllers/indexController";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", indexController);

export default indexRouter;
