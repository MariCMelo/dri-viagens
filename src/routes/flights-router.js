import { Router } from "express"
import flightsController from "../controllers/flights-controller.js"

const flightsRouter = Router()

flightsRouter
    .post("/flights", flightsController.create)
    .get("/flights")

export default flightsRouter