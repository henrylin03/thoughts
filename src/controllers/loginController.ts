import type { Request, Response } from "express";

export const showLoginPageGet = async (_req: Request, res: Response) => {
	res.render("pages/loginForm");
};
