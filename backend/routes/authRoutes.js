const express = require('express');
const {authController} = require('../controllers');
const {validateRequest: validate} = require('../middlewares');
const {loginSchema} = require('../utils/schemas');

const router = express.Router();

router.post('/login', validate(loginSchema), authController.loginUser);

module.exports = router;
