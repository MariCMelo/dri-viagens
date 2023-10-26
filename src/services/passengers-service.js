import passengersRepository from "../repositories/passengers-repository.js"

async function create(lastName, fistName){
    await passengersRepository.create(lastName, fistName)
}

const passengersService = {
    create,

}

export default passengersService