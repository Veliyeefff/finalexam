const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
dotenv.config()


const { Schema } = mongoose

const UserSchema = new Schema(
    {
        icon: { type: String, required: true },
        title: { type: String, required: true },
        info: { type: String, required: true },
    },
    { timestamps: true }
)

const Users = mongoose.model("users", UserSchema)

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("<h1>API</h1>")
})

app.get('/users', (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            } else {
                res.status(404).json({ message: "User not found" })
            }
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.post("/users", (req, res) => {
    const user = new Users(
        {
            icon: req.body.icon,
            title: req.body.title,
            info: req.body.info,
        }
    )
    user.save()
    res.status(200).json({ message: "User create" })
})


app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).json({ message: "User delete" })
        } else {
            res.status(404).json({ message: err })
        }
    })
})

const url = process.env.url.replace("<password>", process.env.password)
const port = process.env.port
mongoose.set('strictQuery', true);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("Db connect");
        app.listen(port, (err) => {
            if (!err) {
                console.log("Server loading");
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
})



