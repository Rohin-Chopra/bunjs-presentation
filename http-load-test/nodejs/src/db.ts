import sqlite3 from "better-sqlite3";

const db = sqlite3("./src/database.sqlite");

export default db;
