const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { studentmodel } = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://rikft:rikftpassword123@cluster0.qh6yg9h.mongodb.net/studdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let student = new studentmodel(input)
    student.save()
    console.log(student)
    res.json({ status: "success" })
})
app.get("/view", (req, res) => {
    studentmodel.find().then(
        (data) => {
            res.json({ data })
        }
    ).catch((error) => {
        res.json(error)
    })

})
app.listen(8004, () => {
    console.log("server started")
})

