const fs = require('fs');
const path = require('path');


function lastNewsData() {
    const jsonData = fs.readFileSync(path.join(__dirname, '../Database/lastNews.json'),
        { encoding: 'utf8' });
    const lastNewsData = JSON.parse(jsonData);

    return lastNewsData;
}





const controller = {
    index: (req, res) => {
        const lastNewsIndex = lastNewsData();

        console.log(req.session.user);
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
    },
    podcast: (req, res) => {
        res.render('podcast');
    }

};



module.exports = controller;