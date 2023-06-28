require('dotenv/config');

const mongoose = require('mongoose');
const { save } = require('../src/services/user');

describe('Test user create route', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Conexão com o mongo estabelecida');
    });

    it('should be create user', async () => {
        const savedUser = await save({
            name: 'Name test',
            username: 'usernameTest',
            email: 'email@test.com'
        });
        
        expect(savedUser).toHaveProperty('_id');
    });

    it('should not be able to create user with username already exists', async () => {
        const userOne = await save({
            name: 'Name test one',
            username: 'usernameTestDuplicated',
            email: 'emailone@test.com'
        });

        const userTwo = await save({
            name: 'Name test two',
            username: 'usernameTestDuplicated',
            email: 'emailtwo@test.com'
        });

        expect(userTwo).toThrowError()
    })
})