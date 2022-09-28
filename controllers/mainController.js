const fs = require('fs');
const path = require('path');


const jsonData = fs.readFileSync(path.join(__dirname, '../models/data/lastNews.json'),
    { encoding: 'utf8' });

const lastNewsData = JSON.parse(jsonData);

console.log(jsonData);
console.log(lastNewsData);


const controller = {
    index: (req, res) => {
        res.render('index', {lastNewsData});
    },
    article: (req, res) => {
        res.render('article');
    },
    review: (req, res) => {
        res.render('review');
    }

};



module.exports = controller;