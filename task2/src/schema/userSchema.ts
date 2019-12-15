import * as Joi from 'joi';

const userSchema = Joi.object({
  id: Joi.string().required(),
  login: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  age: Joi.number().integer().min(4).max(130).required(),
  isDeselected: Joi.boolean().strict().required()
});

export default userSchema;
