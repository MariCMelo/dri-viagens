import { Router } from "express";
import travelsController from "../controllers/travels-controller.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { travelSchema } from "../schemas/travels-schemas.js";

const travelsRouter = Router();

travelsRouter.post("/travels",validateSchema(travelSchema), travelsController.create);

export default travelsRouter;
