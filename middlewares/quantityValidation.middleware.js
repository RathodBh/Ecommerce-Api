const Joi = require("joi");

module.exports = (req, res, next) => {
  try {
    console.log("------------------",req.body)
    const schema = Joi.object().keys({
      quantity: Joi.number().integer().min(1).required(),
    });
    const { error } = schema.validate(req.body);

    error ? res.status(401).send(error?.details[0]?.message) : next();
  } catch (error) {
    res.status(401).send("Invalid quantity");
  }
};
