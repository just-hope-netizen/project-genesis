const express = require('express');
const router = express.Router();
const path = require('path');

const User = require('../models/user')



router.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'registerPage.html'))
    
})

router.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'loginPage.html'));
})

router.post("/register", (req, res)=>{
    const text = req.body.text;
    const password = req.body.password;
    const email = req.body.email;
    
    const user = new User(text, password, email);
    user.save();
    // sync render index page after saving to database
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));

    // .then(result => {
    //     console.log(result);
    //     res.send('ok ')
    // }).catch(err => {
    //     console.log(err);
    // });



});

router.post("/login", (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    user.findOne({  email: email, password: password}, (err)=>{
        if (err) {
            console.log(err);
            return alert("wrong")
        }else{
            if({password: password} === password){
                   res.send("you logged in")
                   
            }else{
                console.log("wrong password or email")
            }
        }
    })
    
    res.send("abeg")
})

module.exports = router