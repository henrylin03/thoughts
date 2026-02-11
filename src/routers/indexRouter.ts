import { Router } from "express";
import { logout, showHomePageGet } from "@/controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", showHomePageGet);
indexRouter.get("/logout", logout);

export default indexRouter;
