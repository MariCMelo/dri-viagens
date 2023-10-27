import { Router } from "express";
import travelsController from "../controllers/travels-controller.js";

const travelsRouter = Router();

travelsRouter.post("/travels", travelsController.create);

export default travelsRouter;
