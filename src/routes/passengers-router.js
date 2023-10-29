import { Router } from "express";
import passengersController from "../controllers/passengers-controller.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { passengerSchema } from "../schemas/passengers-schemas.js";

const passengersRouter = Router();

passengersRouter
  .post("/passengers", validateSchema(passengerSchema),passengersController.create)
  .get("/passengers/travels", passengersController.getSumTravels);

export default passengersRouter;
