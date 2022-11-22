const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models')




function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, '../data/users.json'));
    const data = JSON.parse(jsonData);
    return data
}


function writeFile(data) {
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), dataString);
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
            db.Users.create({
                email: req.body.email,
                pswd: req.body.pswd,
                userName: req.body.userName
            });

            res.redirect('/');
        }
    },
    login: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('loginRegister',
                {
                    errors: errors.array(),
                    old: req.body
                });
        } else {
            const data = findAll()

            for (let i = 0; i < data.length; i++) {
                if (data[i].email == req.body.email) {
                    if (bcryptjs.compareSync(req.body.pswd, data[i].pswd)) {
                        var loggedUser = data[i];
                        break;
                    }
                }
            }

            if (loggedUser == undefined) {
                return res.render('loginRegister',
                    {
                        errors: [
                            { msg: 'Invalid credentials' }
                        ]
                    });
            }


            req.session.user = loggedUser;

            res.cookie('rememberUser', loggedUser.email, {
                maxAge: 1000000000
            })

            return res.render('loginRegister');

        }
    }
}

module.exports = controller;