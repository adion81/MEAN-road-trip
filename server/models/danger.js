const mongoose = require('mongoose');

const DangerSchema = new mongoose.Schema({
    class: {
        type: String,
        required: [true,"A danger must be categorized"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    damage: {
        type: Number,
        required: [true,"Damage is required"],
        min: [1,"One is the minimum"],
        max: [10,"Ten is the max"]
    },
    description: {
        type: String,
        required: [true,"Be descriptive."]
    }
})