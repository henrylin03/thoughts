import { Router } from "express";
import {
	allThoughtsGet,
	deleteThoughtPost,
	newThoughtGet,
	newThoughtPost,
} from "@/controllers/thoughtsController.js";

const thoughtsRouter = Router();

thoughtsRouter.get("/", allThoughtsGet);
thoughtsRouter.get("/new", newThoughtGet);
thoughtsRouter.post("/new", ...newThoughtPost);

thoughtsRouter.post("/:id/delete", deleteThoughtPost);

export default thoughtsRouter;
