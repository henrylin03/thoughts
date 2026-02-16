import { Pool } from "pg";
import "dotenv/config";

export const prodDbConfig = {
	host: process.env.PROD_DB_HOST,
	database: process.env.PROD_DB_NAME,
	user: process.env.PROD_DB_USER,
	password: process.env.PROD_DB_PW,
	ssl: {
		rejectUnauthorized: true,
	},
};

export const pool = new Pool(prodDbConfig);
