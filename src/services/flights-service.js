import flightsRepository from "../repositories/flights-repository.js"

async function create(origin, destination, date){
    await flightsRepository.create(origin, destination, date)
}

const flightsService = {
    create
}

export default flightsService