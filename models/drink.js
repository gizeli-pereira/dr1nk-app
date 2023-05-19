const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    // Come back an change to Google Maps API
    location: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Drink', drinkSchema);