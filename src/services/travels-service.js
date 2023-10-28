import { errors } from "../errors/errors.js";
import flightsRepository from "../repositories/flights-repository.js";
import passengersRepository from "../repositories/passengers-repository.js";
import travelsRepository from "../repositories/travels-repository.js";

async function create(passengerId, flightId) {
  const passenger = await passengersRepository.findById(passengerId);
  const flight = await flightsRepository.findById(flightId);
  // console.log (flightId)
  
  console.log(passenger, flight)
  if (!passenger) throw errors.notFound("Passenger");
  if (!flight) throw errors.notFound("Flight");

  await travelsRepository.create(passengerId, flightId);
} 

const travelsService = {
  create,
};

export default travelsService;
