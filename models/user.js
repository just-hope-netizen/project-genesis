const mongoose = require('mongoose');

///creating a user schema

const newUser = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

///creating a model

const user = mongoose.model("user", newUser)

module.exports = user;