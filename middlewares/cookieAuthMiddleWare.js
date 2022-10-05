const fs = require("fs");
const path = require("path");

function cookieAuthMiddleWare(req, res, next) {

    next();

    if (req.cookies.rememberUser != undefined &&
        req.session.user == undefined) {

        function findAll() {
            const jsonData = fs.readFileSync(path.join(__dirname, '../Database/users.json'));
            const data = JSON.parse(jsonData);
            return data
        }

        const data = findAll()

        for (let i = 0; i < data.length; i++) {
            if (data[i].email == req.cookies.rememberUser) {
                var loggedUser = data[i];
                break;
            }
        } req.session.user = loggedUser;

    }


}


module.exports = cookieAuthMiddleWare;