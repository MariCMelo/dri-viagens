import { db } from "../database.connections.js";

async function create(firstName, lastName) {

  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

async function getAll() {
    const passengers = await db.query( `SELECT * FROM passengers`)
    return passengers.rows
}

const passengersRepository = {
  create,
  getAll
};

export default passengersRepository;
