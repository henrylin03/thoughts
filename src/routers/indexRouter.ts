import { Router } from "express";
import {
	showHomePageGet,
	showSignUpFormGet,
} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", showHomePageGet);
indexRouter.get("/register", showSignUpFormGet);

export default indexRouter;
