import type { LoginField } from "@/models/fields.ts";
import "express-session";

declare module "express-session" {
	interface SessionData {
		flash: {
			error: LoginField[];
		};
	}
}
