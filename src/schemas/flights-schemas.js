import joiBase from "joi";
import joiDate from "@joi/date";

const joi = joiBase.extend(joiDate);

export const flightSchema = joi.object({
  origin: joi.required(),
  destination: joi.required(),
  date: joi.date().format("DD-MM-YYYY").required(),
});
