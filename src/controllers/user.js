'use strict'

const HttpStatusCodes = require('http-status-codes');

const service = require('../services/user')

exports.save = async (req,res) => {
    try {
        let user = await service.save(req.body);
        res.status(HttpStatusCodes.StatusCodes.OK).send(user);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
}