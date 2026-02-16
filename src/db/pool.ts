import { Pool } from "pg";
import "dotenv/config";

export const prodDbConfig = {
	connectionString: process.env.PROD_DB_URL,
	ssl: {
		rejectUnauthorized: true,
		checkServerIdentity: () => undefined,
	},
};

export const pool = new Pool(prodDbConfig);
