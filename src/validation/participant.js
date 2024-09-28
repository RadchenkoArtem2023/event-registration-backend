const Joi = require("joi");

const validateParticipant = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    birthDate: Joi.date().required(),
    source: Joi.string().required(),
    eventId: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = validateParticipant;
