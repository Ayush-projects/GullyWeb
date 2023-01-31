const express = require('express')
const Router = express.Router()


Router.use(express.json())


Router.get("/", (req,res)=>{
    res.render("index")
})

Router.get("/:city/:state", (req,res)=>{
    let city = req.params.city
    let state = req.params.state




    res.json({city, state})
})

Router.get("/test", (req,res)=>{
    res.send("/test")
})




module.exports = Router