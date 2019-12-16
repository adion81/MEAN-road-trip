const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required."]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    imageUrl: {
        type: String,
        required : [true,"please reference an image file."]
    },
    bypass: {
        type: Number
    },
    north: {
        type: Number
    },
    south: {
        type: Number
    },
    listNumber: {
        type: Number,
        required: true
    },
    trip: {
        type: String,
        required: true
    },
    next: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    previous: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }

},{timestamps: true})


mongoose.model("City",CitySchema);