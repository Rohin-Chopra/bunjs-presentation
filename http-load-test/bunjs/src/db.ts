import { Database } from "bun:sqlite";

const db = Database.open("./src/database.sqlite");

export default db;
