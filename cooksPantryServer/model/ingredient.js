const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    expiration: {
        type: Boolean,
        required: true
    },
    expirationDate: {
        type: Date
    },
    notes: {
        type: String
    }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);

