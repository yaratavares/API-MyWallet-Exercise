import connection from "../database.js";

export function insertNewFinancial(id, value, type) {
  return connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [id, value, type]
  );
}

export function selectEventsFinancial(id) {
  return connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [id]
  );
}
