const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
const usersValidations = require('../validations/usersValidations');



router.get('/', userController.loginRegister);




module.exports = router;
