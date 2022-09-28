const fs = require('fs');
const path = require('path');


function lastNewsData() {
    const jsonData = fs.readFileSync(path.join(__dirname, '../models/data/lastNews.json'),
        { encoding: 'utf8' });
    const lastNewsData = JSON.parse(jsonData);

    return lastNewsData;
}





const controller = {
    index: (req, res) => {
        const lastNewsIndex = lastNewsData();
        res.render('index', { lastNewsIndex });
    },
    article: (req, res) => {
        const lastNewsArticle = lastNewsData();
       
        const selectedArticle = lastNewsArticle.find(article => {
            return article.id == req.params.id;
        })

        res.render('article', { selectedArticle });
    },
    review: (req, res) => {
        res.render('review');
    }

};



module.exports = controller;