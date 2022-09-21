const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    quote: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Quote', dataSchema)