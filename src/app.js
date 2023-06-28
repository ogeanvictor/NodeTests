require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Conexão com o mongo estabelecida')
        require('./database/user');
    } catch (error) {
        console.log(error)
    }
}
connection();

const router = express.Router();

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

module.exports = app;