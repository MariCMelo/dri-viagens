import { Router } from "express"
import { validateSchema } from "../middleware/validateSchema.js"
import { citySchema } from "../schemas/cities-schemas.js"
import cityController from "../controllers/city-controller.js"

const cityRouter = Router()

cityRouter.post("/cities", validateSchema(citySchema), cityController.create)

export default cityRouter