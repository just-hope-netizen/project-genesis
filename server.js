const mongoose = require('mongoose');
const express = require('express');
const user = require('./models/user');
const bodyParser = require('body-parser')
const port = 1000;


/// connecting to  mongo database 
mongoose.connect("mongodb://localhost/admin");

mongoose.connection.once("open", () =>{
    console.log("mongodb is running");
}).on("error", (err) =>{
    console.log(`${err}error`);
})


const app = express();



app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/component/registerPage.html")
})

app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/component/loginPage.html")
})

app.post("/register", (req, res)=>{
 const inputtedUsername = req.body.text;
 const inputtedEmail = req.body.email;
 const inputtedPassword = req.body.password;


 const newUser = new user({
     username: inputtedUsername,
     email: inputtedEmail,
     password: inputtedPassword
 });

 newUser.save((err)=>{
     err? console.log(err) : res.send("working");
     console.log(newUser);
 })

});

app.post("/login", (req, res)=>{
    const inputtedEmail = req.body.email;
    const inputtedPassword = req.body.password;

    user.findOne({  email: inputtedEmail}, (err, foundResult)=>{
        if (err) {
            console.log(err);
        }else{
            if(foundResult.password === inputtedPassword){
                   res.send("you logged in")
            }else{
                console.log("wrong password or email")
            }
        }
    })
    
    
})


app.listen(port, () =>{
    console.log("server started at port 1000");
})
