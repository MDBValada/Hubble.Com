
const db = require("./../models");
const passport = require('./../services/passport');

class userController {
    constructor() {
    }
    createUser(req, res) {
        db.User
            .create(req.body)
            .then(
                (results) => {
                    res.json(results);
                }
            );

    }
    logInUser(req, res) {
        const { username, password } = req.body;
        console.log(username)
        db.User
            .findOne({ username: username })
            .then(results => {
                const { username, email, first_name, last_name, zipcode, personality, hobbies, _id } = results;
                res.json({ username, email, first_name, last_name, zipcode, personality, hobbies, _id });
            })
        // res.send("auth")
    }

    findUser(req,res){
        db.User
        .findOne({_id :req.body.id})
        .then()
    }
    
    savePersonality(req, res) {
        // find user loged in by id and
        db.User
            .findOneAndUpdate({ "_id": req.body.id }, {$set: {"personality":req.body.personality}})
            .then(
                (results) => {
                    res.json(results);
                }
            )
        //not sure if this is quite right but it is suposed to update the blank entry, 
        //of "personality" in the user's data in the DB to the personality we gave them.
    }

    saveHobbies(req, res) {
        // find user loged in by id and
        db.User
            .findOneAndUpdate({ _id: req.body.id }, {$set: {"hobbies":req.body.hobbies}})
            .then(
                (results) => {
                    res.json(results);
                }
            )
        //not sure if this is quite right but it is suposed to update the blank entry, 
        //of "Hobbies" in the user's data in the DB to the Hobbies we gave them.
    }
}

module.exports = new userController();