const fs = require('fs');
const path = require('path');

let lastnewsDataPath = '../Database/lastNews.json';
let podcastsDataPath = '../Database/podcasts.json';
let reviewsDataPath = '../Database/reviews.json';

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
        const reviewsIndex = getData(reviewsDataPath);

        res.render('index', { lastNewsIndex, podcastsIndex, reviewsIndex });
    },
    article: (req, res) => {
        const lastNewsArticle = getData(lastnewsDataPath);

        const selectedArticle = lastNewsArticle.find(article => {
            return article.id == req.params.id;
        })

        res.render('article', { article: selectedArticle });
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
    },
    news: (req,res) => {
        res.render('news');
    }

};



module.exports = controller;