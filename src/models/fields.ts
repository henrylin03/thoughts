type LoginField = "username" | "password";
type LoginError = {
	field: LoginField;
	message: string;
};

export type { LoginError, LoginField };
