import { faker } from "@faker-js/faker";
import db from "./db";
import { IUser } from "./types";

const CREATE_DB_QUERY = `
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE
  )
`;
db.run(CREATE_DB_QUERY);

for await (const iterator of Array.from(Array(50))) {
  const user: IUser = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };

  const query = `
        INSERT INTO
            users (id, first_name, last_name, email, phone)
        VALUES( "${user.id}",	"${user.firstName}" ,"${user.lastName}", "${user.email}", "${user.phone}" )
    `;
  db.run(query);
}
