const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
const { validateRegister } = require('../validations/usersValidations');
const { validateLogin } = require('../validations/usersValidations');



router.get('/', userController.create);
router.post('/create', validateRegister, userController.store);
router.post('/login', validateLogin, userController.login);




module.exports = router;
