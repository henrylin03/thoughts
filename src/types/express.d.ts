declare global {
	namespace Express {
		interface User {
			id: string;
			is_member: boolean;
			is_admin: boolean;
		}
	}
}

export {};
