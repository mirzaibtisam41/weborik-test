const AppResponse = require('../utils/appResponses');

const responseHandler = (_, res, next) => {
  if (res.locals.response instanceof AppResponse) {
    const {statusCode, message, data, success} = res.locals.response;
    return res.status(statusCode).json({success, message, data});
  }
  next();
};

module.exports = responseHandler;
