import { db } from "../database.connections.js";

async function create(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}
async function findById(id) {
  const result = await db.query(`SELECT * FROM passengers WHERE id=$1`, [id]);

  return result.rows[0];
}

async function getSumTravels(name) {
  const params = [];
  let queryAll = `
  SELECT  
    CONCAT(passenger_name."firstName", ' ', passenger_name."lastName") AS name,
    COALESCE(COUNT(passenger_travels."passengerId"), 0) AS travels
FROM passengers passenger_name
LEFT JOIN travels passenger_travels ON passenger_travels."passengerId" = passenger_name.id
WHERE 1=1
  `;

  if (name) {
    params.push(`%${name}%`);
    queryAll += `AND CONCAT(passenger_name."firstName", ' ', passenger_name."lastName") ILIKE $1`;
  }

  queryAll += `
  GROUP BY passenger_name."firstName", passenger_name."lastName"
  ORDER BY travels DESC;;`;

  const passengersTravels = await db.query(queryAll, params);

  return passengersTravels.rows;
}

const passengersRepository = {
  create,
  findById,
  getSumTravels,
};

export default passengersRepository;
