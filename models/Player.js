const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    score: {
        type: Number,
        default: 0
    },

    level: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Player = mongoose.model('player', PlayerSchema);