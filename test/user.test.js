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
            username: 'usernameTest3142256',
            email: 'email2212231139934@test.com'
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

    it('should be able to get all users', async () => {
        const response = await request(app).get('/user/');

        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
    });

    it('should be able to get user by Id', async () => {
        const id = '649db730529d18cfa525b9cf';
        const response = await request(app).get(`/user/${id}`)

        expect(response.status).toBe(200);
        expect(response.body._id).toEqual(id);
    });

    it('should be able to update user', async () => {
        const response = await request(app).put(`/user/`).send({
            _id: '649db730529d18cfa525b9cf',
            name: 'Name updated'
        });

        expect(response.status).toBe(200);
    });

    it('should be able to delete user', async () => {
        const id = '64a5dec5159d558cc77900ec';
        const response = await request(app).delete(`/user/${id}`);

        expect(response.status).toBe(200);
    });

     afterAll(async () => {
        await mongoose.connection.close();
        console.log('Conexão com o mongo desligada')
    });
})