import httpStatus from "http-status";
import flightsService from "../services/flights-service.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightsService.create(origin, destination, date);
  res.sendStatus(httpStatus.CREATED);
}

async function findById(id) {
  const result = await db.query(`SELECT * FROM flights WHERE id=$1`, [id]);
  return result.rows[0];
}

async function getAll() {}

const flightsController = { create, findById, getAll };

export default flightsController;
