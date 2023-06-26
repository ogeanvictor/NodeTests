require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Conexão com o mongo estabelecida')
    } catch (error) {
        console.log(error)
    }
}
connection();
require('./database/user');

const app = express();
app.use(express.json());

const router = express.Router();
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

module.exports = app;