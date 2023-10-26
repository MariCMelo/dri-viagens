import { db } from "../database.connections.js";

async function create(fistName, lastName) {

  await db.query(
    `INSERT INTO passengers ("fistName", "lastName") VALUES ($1, $2);`,
    [fistName, lastName]
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
