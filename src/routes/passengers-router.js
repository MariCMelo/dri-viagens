import { Router } from "express"
import passengersController from "../controllers/passengers-controller.js"
import passengersRepository from "../repositories/passengers-repository.js"
import { validateSchema } from "../middleware/validateSchema.js"
import { passengerSchema } from "../schemas/passengers-schemas.js"

const passengersRouter = Router()

passengersRouter
    .post("/passengers", validateSchema(passengerSchema), passengersController.create)
    .get("/passengers/travels")

export default passengersRouter