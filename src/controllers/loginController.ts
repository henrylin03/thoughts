import type { Request, Response } from "express";
import passport from "@/config/passport.js";

const loginGet = async (_req: Request, res: Response) => {
	res.render("pages/loginForm");
};

const loginPost = passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/login",
});

export { loginPost, loginGet };
