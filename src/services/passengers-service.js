import passengersRepository from "../repositories/passengers-repository.js";

async function create(lastName, firstName) {
  await passengersRepository.create(lastName, firstName);
}

const passengersService = {
  create,
};

export default passengersService;
