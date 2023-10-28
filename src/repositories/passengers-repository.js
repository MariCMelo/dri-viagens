import { db } from "../database.connections.js";

async function create(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}
async function findById(id) {
  
  const result = await db.query(`SELECT * FROM passengers WHERE id=$1`, [id]);
  console.log( result)
  return result.rows[0];
}

async function getAll() {
  const passengers = await db.query(`SELECT * FROM passengers`);
  return passengers.rows;
}

const passengersRepository = {
  create,
  findById,
  getAll,
};

export default passengersRepository;
