const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
const routes = require('./src/routes/main')//import route folder
const app = express()
const path = require('path')
//mongodb require path
const connectDB = require('./src/db/connectdb') //file folder name
const mongoDBs = require('./src/db/connectdb') //import database
const port = process.env.PORT || 3002

//way to use static folder
app.use(express.static("public")) //here static with public can be anything

//to use routes after import
app.use('/',routes)


//use npm start to start server.use to test only
/*app.get('',(req,res)=>{
    res.send('Hello world')
})*/

//template engine ejs use
app.set('view engine','hbs')
app.set('views','views') //first views is fix aur second views is folder
//name where views exits

//set partials
hbs.registerPartials("views/partials")

/*//db connection simple way
mongoose.connect("mongodb://localhost/websiteBanao",()=>{
    console.log("db connected")
})
*/

//connect to mongodb recommended way
connectDB()
mongoose.connection.once('open',()=>{
    console.log('database connected sucessfully');
})
app.listen(port,()=>{
    console.log('running at port number 3002')
})
