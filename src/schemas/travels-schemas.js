import joi from "joi";

export const travelSchema = joi.object({
  passengerId: joi.required(),
  flightId: joi.required(),
});
