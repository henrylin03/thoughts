import { Router } from "express";
import {
	updateUserToAdminPost,
	updateUserToMemberPost,
} from "@/controllers/permissionsController.js";

const permissionsRouter = Router();

permissionsRouter.post("/become-member", updateUserToMemberPost);
permissionsRouter.post("/become-admin", updateUserToAdminPost);

export default permissionsRouter;
