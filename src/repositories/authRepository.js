import connection from "../database.js";

export async function findUserByEmail(email) {
  const existingUsers = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  return existingUsers.rows[0];
}

export function signUpNewUser(name, email, hashedPassword) {
  return connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
}
