import httpStatus from "http-status";
import flightsService from "../services/flights-service.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightsService.create(origin, destination, date);
  res.sendStatus(httpStatus.CREATED);
}

async function getAll(req, res) {
  const { origin, destination } = req.query;

  const flight = await flightsService.getAll(origin, destination);
  res.send(flight);
}

const flightsController = { create, getAll };

export default flightsController;
