const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    expiryDate: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        // required: true
    },
    isOpened: {
        type: Boolean,
        // required: true
    },
    inFridged: {
        type: Boolean,
        // required: true
    },
    quantity: {
        type: Number,
        // required: true
    },
}, { timestamps: true })

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem