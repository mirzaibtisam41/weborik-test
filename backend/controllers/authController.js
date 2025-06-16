const {authService} = require('../services');
const AppError = require('../utils/appErrors');
const AppResponse = require('../utils/appResponses');
const {StatusCodes} = require('http-status-codes');

exports.loginUser = async (req, res, next) => {
  try {
    const {email, password} = req.body;

    const user = await authService.findUserByEmail(email);
    if (!user)
      return next(
        new AppError({
          message: 'User not found',
          statusCode: StatusCodes.BAD_REQUEST,
        })
      );

    const isValid = await authService.validatePassword(password, user.password);
    if (!isValid)
      return next(
        new AppError({
          message: 'Invalid credentials',
          statusCode: StatusCodes.UNAUTHORIZED,
        })
      );

    res.locals.response = new AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Login successful',
      data: {id: user.id, email: user.email},
    });

    return next();
  } catch (err) {
    next(err);
  }
};
