import { db } from "../database.connections.js"


async function create(origin, destination, date) {
 
    await db.query(
        `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
        [origin, destination, date]
    )
}



const flightsRepository = {
    create,
}

export default flightsRepository