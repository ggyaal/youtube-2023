import express from "express";
import { joinController, loginController, rootController } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.route("/").get(rootController);

rootRouter.route("/join").get(joinController);
rootRouter.route("/login").get(loginController);

export default rootRouter;