#! /usr/bin/env node

import "dotenv/config";
import bcrypt from "bcryptjs";
import { Client } from "pg";

type PermissionPasskeys = {
	becomeMemberPasskey: string;
	becomeAdminPasskey: string;
};

// const getHashedPasskeys = async (
//   passkeys: PermissionPasskeys,
//   salt: string,
// ): PermissionPasskeys => {
//   const res = { becomeMemberPasskey: "", becomeAdminPasskey: "" };

//   for (const keyType in passkeys) {
//     res[keyType] = await bcrypt.hash(res[keyType], salt);
//   }

//   return res;
// };

const main = async () => {
	const permissionElevationPasskeys = process.env.PERMISSION_ELEVATION_PASSKEYS;
	if (!permissionElevationPasskeys)
		throw new Error(
			"Please ensure PERMISSION_ELEVATION_PASSKEYS object is defined in .env file",
		);

	console.log(permissionElevationPasskeys);

	// const passkeysParsed = JSON.parse(permissionElevationPasskeys);

	// const salt = await bcrypt.genSalt();
	// console.log(getHashedPasskeys(passkeysParsed, salt));

	const createTablesQuery = `
CREATE TABLE IF NOT EXISTS users (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    username varchar(255) NOT NULL UNIQUE,
    password text NOT NULL,
    is_member boolean NOT NULL DEFAULT false,
    is_admin boolean NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS messages (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author_id integer REFERENCES users(id),
    title varchar(70) NOT NULL,
    text varchar(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS passkeys (
  elevate_to varchar(70) PRIMARY KEY,
  passkey text NOT NULL
);
`;

	// const populateTablesQuery = `
	// INSERT INTO passkeys VALUES('member', ${})
	// `

	console.log("seeding...");
	const client = new Client({
		connectionString: process.env.LOCAL_DATABASE_URL,
	});

	await client.connect();
	await client.query(createTablesQuery);
	await client.end();
	console.log("done");
};

main();
