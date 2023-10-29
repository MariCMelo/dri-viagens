import passengersRepository from "../repositories/passengers-repository.js";

async function create(lastName, firstName) {
  await passengersRepository.create(lastName, firstName);
}

async function getSumTravels(name) {
  const travels = await passengersRepository.getSumTravels(name);

  return travels;
}
const passengersService = {
  create,
  getSumTravels,
};

export default passengersService;
