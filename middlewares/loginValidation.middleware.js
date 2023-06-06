const Joi = require("joi");

module.exports = (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);

    error ? res.status(401).send(error?.details[0]?.message) : next();
  } catch (error) {
    res.status(401).send("Invalid username or password");
  }
};
