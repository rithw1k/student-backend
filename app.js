const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
 
app.get("/",(req,res)=>{
res.send("hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome to my contact page")
})
app.listen(8080,()=>{
    console.log("server started")
})
