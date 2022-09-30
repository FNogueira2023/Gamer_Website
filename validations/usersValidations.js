const {check} = require('express-validator');


module.exports = {validateRegister : [
    check('name')
        .notEmpty()
        .withMessage('Please fill out this field')
        .bail()
        .isLength({min:1 ,max:10})
        .bail(),
    check('email')
        .notEmpty()
        .withMessage('Please fill out this field')
        .bail()
        .isEmail()
        .withMessage('It must be a valid email format')
        .bail(),
    check('pswd')
        .notEmpty()
        .withMessage('Please fill out this field')
        .bail()
        .isLength({min:4, max:8})
        .withMessage('The password must have between 4 and 8 characters')
        .bail()
]
};