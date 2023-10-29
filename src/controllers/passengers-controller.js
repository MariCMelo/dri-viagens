import httpStatus from "http-status";
import passengersService from "../services/passengers-service.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengersService.create(firstName, lastName);
  res.sendStatus(httpStatus.CREATED);
}

async function getSumTravels(req, res) {
  const { name } = req.query;

  const passengerTravels = await passengersService.getSumTravels(name);
  res.send(passengerTravels);
}

const passengersController = {
  create,
  getSumTravels,
};

export default passengersController;
