const fs = require('fs');
const path = require('path');


function lastNewsData() {
    const jsonData = fs.readFileSync(path.join(__dirname, '../Database/lastNews.json'),
        { encoding: 'utf8' });
    const lastNewsData = JSON.parse(jsonData);

    return lastNewsData;
}

function podcastsData() {
    const jsonData = fs.readFileSync(path.join(__dirname, '../Database/podcasts.json'),
        { encoding: 'utf8' });
    const podcastsData = JSON.parse(jsonData);

    return podcastsData;
}


const controller = {
    index: (req, res) => {

        const lastNewsIndex = lastNewsData();
        const podcastsIndex = podcastsData();

        res.render('index', { lastNewsIndex, podcastsIndex });
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
        const podcast = podcastsData();

        const selectedPodcast = podcast.find(podcast => {
            return podcast.id == req.params.id;
        })
        res.render('podcast', { podcast: selectedPodcast });
    }

};



module.exports = controller;