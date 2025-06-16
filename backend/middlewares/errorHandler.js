const {StatusCodes} = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong';

  res.status(status).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;
