import connection from "../database.js";

export async function findUserByEmail() {
  const existingUsers = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  return existingUsers.rows[0];
}

export async function signUpNewUser(name, email, hashedPassword) {
  await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
}
