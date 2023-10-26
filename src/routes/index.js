import { Router } from "express";
import passengersRouter from "./passengers-router.js";
import flightsRouter from "./flights-router.js";
import travelsRouter from "./travels-router.js";
import cityRouter from "./city-routes.js";

const router = Router();
router.use(passengersRouter);
router.use(flightsRouter);
router.use(travelsRouter);
router.use(cityRouter);

export default router;
