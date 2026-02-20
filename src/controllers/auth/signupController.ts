import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { addUser } from "@/db/queries.js";
import { validateRegistrationForm } from "@/helpers/validation.js";

const PAGE_TITLE = "Create account";

const signupUserGet = async (_req: Request, res: Response) => {
	res.render("pages/signupForm", { title: PAGE_TITLE });
};

const signupUserPost = [
	validateRegistrationForm,
	async (req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).render("pages/signupForm", {
				errors: errors.array(),
				title: PAGE_TITLE,
			});

		const { firstName, lastName, username, password } = matchedData(req);
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);
		const formData = {
			firstName,
			lastName,
			username,
			password: hashedPassword,
		};

		await addUser(formData);

		res.redirect("/");
	},
];

export { signupUserGet, signupUserPost };
