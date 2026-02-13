import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import {
	elevateUserToMember,
	getPermissionElevationPasskey,
} from "@/db/queries.js";

export const updateUserToMemberPost = async (req: Request, res: Response) => {
	const userEnteredPasskey = req.body.passkey;
	const user = req.user;
	if (!user) return res.redirect("/log-in");

	const { id: userId, is_member: isMember } = user;
	if (isMember) return res.redirect("/");

	const passkeyToBecomeMember = await getPermissionElevationPasskey("member");
	if (!passkeyToBecomeMember) {
		console.error(
			"Passkey to become member has not been defined. Please seed database again.",
		);
		return res.redirect("/");
	}

	const isCorrectPassword = await bcrypt.compare(
		userEnteredPasskey,
		passkeyToBecomeMember,
	);
	if (isCorrectPassword) await elevateUserToMember(userId);

	res.redirect("/");
};

export const updateUserToAdminPost = (req: Request, res: Response) => {};
