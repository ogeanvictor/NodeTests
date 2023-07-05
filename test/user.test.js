require('dotenv/config');

const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../src/app')

const { save } = require('../src/services/user');

describe('Test user create route', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Conexão com o mongo estabelecida');
    });

    it('should be create user', async () => {
        const savedUser = await save({
            name: 'Name test',
            username: 'usernameTest26',
            email: 'email23@test.com'
        });
        
        expect(savedUser).toHaveProperty('_id');
    });

    it('should be able to create user (test integration)', async () => {
        const response = request(app).post('/user/').send({
            name: 'Name supertest',
            username: 'usernameSupertest1',
            email: 'email1@supertest.com'
        })

        expect((await response).statusCode).toBe(200);
    });

    it('should not be able to create user with username already exists', async () => {
        const userOne = await save({
            name: 'Name test one',
            username: 'usernameTestDuplicated2',
            email: 'emailduplicated1@test.com'
        });

        const userTwo = await save({
            name: 'Name test two',
            username: 'usernameTestDuplicated',
            email: 'emailduplicated1@test.com'
        });

        expect(userTwo).toHaveProperty('message');
    });

    afterAll(async () => {
        await mongoose.connection.close();
        console.log('Conexão com o mongo desligada')
    });
})