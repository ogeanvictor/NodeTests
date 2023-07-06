'use strict'

const HttpStatusCodes = require('http-status-codes');

const service = require('../services/user');

exports.save = async (req,res) => {
    try {
        let user = await service.save(req.body);
        res.status(HttpStatusCodes.StatusCodes.OK).send(user);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.get = async (req, res) => {
    try {
        let users = await service.get();
        res.status(HttpStatusCodes.StatusCodes.OK).send(users);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.getById = async (req, res) => {
    try {
        let user = await service.getById(req.params.id);
        res.status(HttpStatusCodes.StatusCodes.OK).send(user);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.update = async (req,res) => {
    try {
        let user = await service.update(req.body);
        res.status(HttpStatusCodes.StatusCodes.OK).send(user);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.delete = async (req, res) => {
    try {
        let user = await service.delete(req.params.id);
        res.status(HttpStatusCodes.StatusCodes.OK).send(user);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};