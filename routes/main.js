const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require('../controllers/mainController');
const authMiddleware = require('../middlewares/authMiddleware');



/* GET home page. */
router.get('/', mainController.index);

//  GET article
router.get('/article/:id', mainController.article);

// Get review
// authmiddleware esta como testeo!
router.get('/review',authMiddleware, mainController.review);
router.get('/podcast',mainController.podcast);




module.exports = router;
