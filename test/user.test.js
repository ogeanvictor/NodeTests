const request = require('supertest');
const user = require('../src/routes/user');

describe('Test user create route', () => {
    it('should be create user', async () => {
        const res = await request(user).post('/').send({
            name: 'Name test',
            username: 'username test',
            email: 'email@test.com'
        })

        console.log(res)
        expect(res.statusCode).toBe(200);
    }, 30000)
})