const Joi = require("joi");

module.exports = (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      first_name: Joi.string().min(2).max(10).required(),
      last_name: Joi.string().min(2).max(10).optional(),
      mobile: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(18).required(),
      confirm_password: Joi.string().required().valid(Joi.ref("password")),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(401).send(error?.details[0]?.message);
    }
    next();
  } catch (error) {
    res.status(401).send("Something went wrong");
  }
};
