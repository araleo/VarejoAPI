import Database from "better-sqlite3";
import path from "path";

/*
Establish a connection to the SQLite database.
*/

const dbPath = path.join(process.cwd(), "data", "varejo.db");

const db = new Database(dbPath);

export default db;
