const express = require('express')
const Router = express.Router()


Router.use(express.json())


Router.get("/", (req,res)=>{
    res.render("index")
})


Router.get("/test", (req,res)=>{
    res.send("/test")
})




module.exports = Router