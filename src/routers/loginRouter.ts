import { Router } from "express";
import { showLoginPageGet } from "../controllers/loginController.js";

const loginRouter = Router();

loginRouter.get("/", showLoginPageGet);

export default loginRouter;
