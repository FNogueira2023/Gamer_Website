const fs = require("fs");
const path = require("path");




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
        const data = findAll()

        const newUser = {
            id: data.length + 1,
            user: req.body.user,            
            email: req.body.email,
            pswd:req.body.pswd
        }

        data.push(newUser);

        writeFile(data)

        res.redirect("/users");
    }

}


module.exports = controller;