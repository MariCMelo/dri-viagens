import { db } from "../database.connections.js";

async function create(origin, destination, date) {
  await db.query(
    `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
    [origin, destination, date]
  );
}

async function findById(id) {
  const result = await db.query(`SELECT * FROM flights WHERE id=$1;`, [id]);
  return result.rows[0];
}

async function getAll(origin, destination) {
  const params = [];
  let queryAll = `
    SELECT
      flight_origin.id,
      origin_city.name AS origin,
      destination_city.name AS destination,
      flight_origin.date
    FROM
      flights flight_origin
    JOIN
      cities origin_city ON flight_origin.origin = origin_city.id
    JOIN
      cities destination_city ON flight_origin.destination = destination_city.id
    WHERE
      1=1
`;
  if (origin) {
    params.push(origin);
    queryAll += `AND origin_city.name=$${params.length} `;
  }
  if (destination) {
    params.push(destination);
    queryAll += `AND destination_city.name=$${params.length} `;
  }
  queryAll += "ORDER BY flight_origin.date;";

  const result = await db.query(queryAll, params);

  return result.rows;
}

const flightsRepository = {
  create,
  findById,
  getAll,
};

export default flightsRepository;
