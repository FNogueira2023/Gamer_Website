const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');




function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, '../models/data/users.json'));
    const data = JSON.parse(jsonData);
    return data
}


function writeFile(data) {
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, '../models/data/users.json'), dataString);
}



const controller = {
    create: (req, res) => {
        res.render('loginRegister');
    },
    store: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('loginRegister',
                {
                    errors: errors.array(),
                    old: req.body
                });
        } else {

            const data = findAll()

            const newUser = {
                id: data.length + 1,
                user: req.body.user,
                email: req.body.email,
                pswd: bcryptjs.hashSync(req.body.pswd, 10)

            }

            data.push(newUser);

            writeFile(data)

            res.redirect("/users");

        }
    }
}


module.exports = controller;