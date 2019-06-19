const express = require("express");

const router = express.Router();

//Item Model
const Player = require("../../models/Player");

//GET ALL PLAYERS - api/items
//METHOD: GET
router.get('/', (req,res) => {
    Player.find()
        .sort({score: 1})
        .then(items => res.json(items));
})

//ADD A PLAYER - api/items
//METHOD: POST
router.post('/', (req,res) => {
    const newPlayer = new Player({
        name: req.body.name,
        score: req.body.score,
        level: req.body.level
    });

    newPlayer.save().then(item => res.json(item));
})


module.exports = router;