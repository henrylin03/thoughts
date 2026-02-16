import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
	connectionString: process.env.PROD_DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});
