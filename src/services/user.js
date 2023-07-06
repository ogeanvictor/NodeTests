'use strict'

const User = require('../database/user');

exports.save = async (user) => {
    try {
        let savedUser = await new User(user).save();
        return savedUser;
    } catch (error) {
        return {message: error.message};
    }
};

exports.get = async () => {
    try {
        let users = await User.find();
        return users;
    } catch (error) {
        return {message: error.message};
    }
};

exports.getById = async (id) => {
    try {
        let user = await User.findById(id);
        return user;
    } catch (error) {
        return {message: error.message};
    }
};

exports.update = async (user) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true});
        return updatedUser;
    } catch (error) {
        return {message: error.message};
    }
};

exports.delete = async (id) => {
    try {
        let user = await User.findByIdAndDelete(id);
        return user;
    } catch (error) {
        return {message: error.message};
    }
};