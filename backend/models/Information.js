const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['About Me', 'Education', 'Clubs', 'Interests'],
        required: true,
    },
    title1: {
        type: String,
        required: true,
    },
    p1: {
        type: String,
        required: true,
    },
    title2: {
        type: String,
        required: true,
    },
    p2: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Info', infoSchema)