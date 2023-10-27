import { db } from "../database.connections.js";

async function create(cityName) {
  await db.query(`INSERT INTO cities (name) VALUES ($1);`, [cityName]);
}

async function findById(id) {
  const result = await db.query(`SELECT * FROM cities WHERE id=$1`, [id]);
  return result.rows[0];
}

async function findByName(cityName) {
    const result = await db.query(`SELECT * FROM cities WHERE name=$1`, [cityName]);
    return result.rows[0];
  }

const cityRepository = {
  create,
  findById,
  findByName
};

export default cityRepository;
