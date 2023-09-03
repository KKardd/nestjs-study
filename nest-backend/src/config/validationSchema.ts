import * as Joi from 'joi';

export const validationSchema = Joi.object({
  EMAIL_SERVICE: Joi.string().required(),
  EMAIL_ID: Joi.string().required(),
  EMAIL_PW: Joi.string().required(),
  EMAIL_BASE_URL: Joi.string().required().uri(),
});
