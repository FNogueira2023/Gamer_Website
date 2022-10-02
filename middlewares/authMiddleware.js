function authMiddleware(req, res, next) {
    if (req.session.user != undefined) {
        next();
    } else{             
        return res.send('You must be logged in to access this site!');
    }
}

module.exports = authMiddleware;