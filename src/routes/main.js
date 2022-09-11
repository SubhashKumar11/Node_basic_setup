const express = require('express')
const routes = express.Router()
const ejs = require('ejs') //import template engine
routes.get("/",(req,res)=>{
    res.render('index1')
})
routes.get("/gallery",(req,res)=>{
    res.render('gallery')
})

module.exports=routes