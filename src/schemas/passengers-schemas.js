import joiBase from "joi"
import joiDate from "@joi/date"

const joi = joiBase.extend(joiDate)

export const passengerSchema = joi.object({
  firstName: joi.string().min(2).max(100).required(),
  lastName: joi.string().min(2).max(100).required(),
});