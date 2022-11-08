const fs = require('fs');
const path = require('path');

let lastnewsDataPath = '../Database/lastNews.json';
let podcastsDataPath = '../Database/podcasts.json';
let reviewsDataPath = '../Database/lastReviews.json';

function getData(dataPath) {
    const jsonData = fs.readFileSync(path.join(__dirname, dataPath),
        { encoding: 'utf8' });
    const data = JSON.parse(jsonData);

    return data;
}

const controller = {
    index: (req, res) => {

        const lastNewsIndex = getData(lastnewsDataPath);
        const podcastsIndex = getData(podcastsDataPath);

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
        const review = getData(reviewsDataPath);

        const selectedReview = review.find(review => {
            return review.id == req.params.id;
        })

        res.render('review', { review: selectedReview });
    },
    podcast: (req, res) => {
        const podcast = getData(podcastsDataPath);

        const selectedPodcast = podcast.find(podcast => {
            return podcast.id == req.params.id;
        })
        res.render('podcast', { podcast: selectedPodcast });
    }

};



module.exports = controller;