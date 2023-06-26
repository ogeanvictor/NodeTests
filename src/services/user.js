'use strict'

const User = require('../database/user');

exports.save = async (user) => {
    try {
       let savedUser = await new User(user).save();
       return savedUser;
    } catch (error) {
        return {message : error.message}
    }
};