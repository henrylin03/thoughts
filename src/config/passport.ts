import bcrypt from "bcryptjs";
import passport from "passport";
import LocalStrategy from "passport-local";
import { getUser, type User } from "../db/queries.js";

passport.use(
	new LocalStrategy.Strategy(async (username, password, done) => {
		try {
			const user: User | null = await getUser(username);
			if (user === null)
				return done(null, false, { message: "Incorrect username" });

			const isPasswordMatched = await bcrypt.compare(password, user.password);
			if (!isPasswordMatched)
				return done(null, false, { message: "Incorrect password" });

			return done(null, user);
		} catch (error) {
			return done(error);
		}
	}),
);

export default passport;
