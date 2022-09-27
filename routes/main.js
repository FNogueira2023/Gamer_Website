const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require('../controllers/mainController');




/* GET home page. */
router.get('/', mainController.index);

//  GET article
router.get('/article',mainController.article);





module.exports = router;
