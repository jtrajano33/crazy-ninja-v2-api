const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")

const players = require("./routes/api/players");

const app = express();

app.use(cors());

app.use(bodyParser.json())

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db)
    .then(() => { console.log("MongoDB Connected"); })
    .catch(err => console.log(err))

//Routes
app.use('/api/players', players);

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})