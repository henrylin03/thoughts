import type { Request, Response } from "express";

const showHomePageGet = async (_req: Request, res: Response) => {
	res.render("index");
};

const showSignUpFormGet = async (_req: Request, res: Response) => {
	res.render("signupForm");
};

export { showHomePageGet, showSignUpFormGet };
