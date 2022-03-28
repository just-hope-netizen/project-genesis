// const mongoose = require('mongoose');
const express = require('express');
const user = require('./models/user');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/user')

const port = 1000;


// /// connecting to  mongo database 
// mongoose.connect("mongodb://localhost/admin");

// mongoose.connection.once("open", () =>{
//     console.log("mongodb is running");
// }).on("error", (err) =>{
//     console.log(`${err}error`);
// })


const app = express();

const mongoConnect = require('./util/database').mongoConnect;



app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true}));

// serving the homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// serving user page
app.use(userRoute)

// serving thr 404 page
app.use((req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404-PAGE.html'))
})

mongoConnect(() => {
    app.listen(port);
})
