import { Router } from "express";
import { logout } from "@/controllers/authController.js";
import {
	registerUserGet,
	registerUserPost,
} from "@/controllers/registerController.js";

const authRouter = Router();

authRouter.get("/signup", registerUserGet);
authRouter.post("/signup", ...registerUserPost);

authRouter.get("/logout", logout);

export default authRouter;
