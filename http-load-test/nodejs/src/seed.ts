import { faker } from "@faker-js/faker";
import db from "./db";
import { IUser } from "./types";

const seed = async () => {
  const CREATE_DB_QUERY = `
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL UNIQUE
    )
  `;
  db.exec(CREATE_DB_QUERY);
  const users = [];
  for await (const iterator of Array.from(Array(50))) {
    const user: IUser = {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };
    users.push(user);
  }

  const insert = db.prepare(`
  INSERT INTO
      users (id, first_name, last_name, email, phone)
  VALUES(@id, @firstName, @lastName, @email, @phone)
`);
  const insertMany = db.transaction((lUsers) => {
    for (const user of lUsers) insert.run(user);
  });
  insertMany(users);
};

seed();
