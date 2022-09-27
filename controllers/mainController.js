const controller = {
    index: (req,res) => {
        res.render('index');
    },
    article: (req,res) => {
        res.render('article');
    }
    
};



module.exports = controller;