import type { Request, Response } from "express";
import passport from "@/config/passport.js";
import type { LoginError, LoginField } from "@/models/fields.js";

const getLoginErrorMessage = (fieldWithError: LoginField): string => {
	if (fieldWithError === "username")
		return "Sorry, we couldn't find an account with that username.";
	if (fieldWithError === "password")
		return "Sorry, that password isn't right. Please try again.";
	else return "";
};

const loginGet = async (req: Request, res: Response) => {
	const { session } = req;

	if (!session.flash || !session.flash.error || !session.flash.error.length)
		return res.render("pages/loginForm");

	const fieldWithError: LoginField | null = session.flash.error.pop() || null;

	if (!fieldWithError) return res.render("pages/loginForm");

	const loginError: LoginError = {
		field: fieldWithError,
		message: getLoginErrorMessage(fieldWithError),
	};

	res.render("pages/loginForm", { error: loginError });
};

const loginPost = passport.authenticate("local", {
	failureFlash: true,
	successRedirect: "/",
	failureRedirect: "/login",
});

export { loginPost, loginGet };
