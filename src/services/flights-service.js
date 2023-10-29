import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import cityRepository from "../repositories/city-repository.js";
import flightsRepository from "../repositories/flights-repository.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

async function create(origin, destination, date) {
  const originCity = await cityRepository.findById(origin);
  const destitationCity = await cityRepository.findById(destination);
  const today = dayjs();
  const flightDate = dayjs(date, "DD-MM-YYYY");

  if (today.isAfter(flightDate)) throw errors.invalidDate();
  if (!originCity || !destitationCity) throw errors.notFound("City");
  if (origin === destination) throw errors.sameCity();

  await flightsRepository.create(origin, destination, date);
}

async function getAll(origin, destination) {
  const flight = await flightsRepository.getAll(origin, destination);

  if (!flight || flight.length === 0) {
    return [];
  }

  return flight;
}

const flightsService = {
  create,
  getAll,
};

export default flightsService;
