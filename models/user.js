// const mongoose = require('mongoose');

// ///creating a user schema

// const newUser = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// ///creating a model

// const user = mongoose.model("user", newUser)

// module.exports = user;

const getDb = require('../util/database').getDb;

class User {
    constructor(text, password, email){
        this.text = text;
        this.password = password;
        this.email = email;
    }

    save(){
        const db = getDb();
        db.collection('user').insertOne(this)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
    }
};

module.exports = User;