const controller = {
    index: (req,res) => {
        res.render('index');
    },
    article: (req,res) => {
        res.render('article');
    },
    review: (req,res) => {
        res.render('review');
    }
    
};



module.exports = controller;