'use strict'

const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.save = async (user) => {
    try {
       let savedUser = await new User(user).save();
       return savedUser;
    } catch (error) {
        return {message : error.message}
    }
};