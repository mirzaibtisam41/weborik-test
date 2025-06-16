const yup = require('yup');

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

module.exports = {
  loginSchema,
};
