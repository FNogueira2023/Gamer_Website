const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models')


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
            let hash = bcryptjs.hashSync(req.body.pswd, 10);

            db.Users.create({
                email: req.body.email,
                pswd: hash,
                userName: req.body.userName
            });

            res.redirect('/');
        }
    },
    login: async (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('loginRegister',
                {
                    errors: errors.array(),
                    old: req.body
                });
        } else {

            const { email, pswd } = req.body;
            let loggedUser;

            const user = await db.Users.findOne({ where: { email: email } });
            const checkPassword = await bcryptjs.compare(pswd, user.pswd);

            if (checkPassword) {
                loggedUser = user;
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