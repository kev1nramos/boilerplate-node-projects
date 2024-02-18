import { Joi } from 'celebrate';

export const exampleSchema = Joi.object({
  name: Joi.string().required(),
});
