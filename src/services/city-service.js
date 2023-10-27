import { errors } from "../errors/errors.js";
import cityRepository from "../repositories/city-repository.js";

async function create(cityName) {
  const city = await cityRepository.findByName(cityName);

  if (city) throw errors.conflict("City");

  await cityRepository.create(cityName);
}

const cityService = { create };

export default cityService;
