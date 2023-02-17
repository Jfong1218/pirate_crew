const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} cannot be empty"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"]
    },
    image: {
        type: String,
        required: [true, "{PATH} cannot be empty"]
    },
    chest: {
        type: Number,
        required: [true, "{PATH} cannot be empty"]
    },
    phrase: {
        type: String,
        required: [true, "{PATH} cannot be empty"]
    },
    position: {
        type: String,
        required: [true, "{PATH} cannot be empty"]
    },
    leg: {
        type: Boolean,
        default: true
    },
    eye: {
        type: Boolean,
        default: true
    },
    hand: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Pirate', PirateSchema)
