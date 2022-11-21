const { body } = require('express-validator');


const validateRegister = [
    body('userName')
        .notEmpty()
        .withMessage('Please fill out with your user name')
        .bail()
        .isLength({ max: 10 })
        .withMessage('The user name must have less than 10 characters')
        .bail(),
    body('email')
        .notEmpty()
        .withMessage('Please fill out with your email')
        .bail()
        .isEmail()
        .withMessage('It must be a valid email format')
        .bail(),
    body('pswd')
        .isLength({ min: 4, max: 8 })
        .withMessage('The password must have between 4 and 8 characters')
        .bail()
];

const validateLogin = [
    body('email')
        .notEmpty()
        .withMessage('Please fill out with your email')
        .isEmail()
        .withMessage('Invalid Email'),
    body('pswd')
        .notEmpty()
        .withMessage('Please fill out with your password') 
        .isLength({ min: 4, max: 8 })
        .withMessage('The password must have between 4 and 8 characters') 
    
]

module.exports = { validateLogin, validateRegister };