import express from "express";
import { rootController } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.route("/").get(rootController);

export default rootRouter;