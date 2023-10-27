import { Router } from "express";
import flightsController from "../controllers/flights-controller.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { flightSchema } from "../schemas/flights-schemas.js";

const flightsRouter = Router();

flightsRouter
  .post("/flights", validateSchema(flightSchema), flightsController.create)
  .get("/flights", flightsController.getAll);

export default flightsRouter;
