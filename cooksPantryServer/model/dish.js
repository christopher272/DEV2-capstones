const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    notes: {
        type: String
    }
});

module.exports = mongoose.model('Dish', dishSchema);