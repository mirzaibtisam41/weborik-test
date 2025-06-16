const {StatusCodes} = require('http-status-codes');

module.exports = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, {abortEarly: false});
    next();
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Validation failed',
      errors: err.errors,
    });
  }
};
