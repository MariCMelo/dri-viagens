import { db } from "../database.connections.js";

async function create(origin, destination, date) {
  await db.query(
    `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
    [origin, destination, date]
  );
}

async function findById(id) {
  const result = await db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
  return result.rows[0];
}

async function getAll() {}

const flightsRepository = {
  create,
  findById,
  getAll,
};

export default flightsRepository;
