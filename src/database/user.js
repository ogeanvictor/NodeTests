'use Strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', schema);