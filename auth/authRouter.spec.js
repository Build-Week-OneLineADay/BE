const request = require('supertest'); // calling it "request" is a common practice

const server = require('../api/server.js');//this is our first red, file doesn't exist yet

const db = require('../data/dbConfig.js');

describe('authRouter.js', () => {

  //there is a beforeEach(), beforeAll(), afterEach(), and afterAll()

  //clean out posts table before each test runs
  beforeEach(async () => {
      await db('users').truncate();
  })

  it('should set environment to testing', () => {
      expect(process.env.DB_ENV).toBe('testing');

  })
 
});

describe('authRouter.js', () => {

  //test the register endpoint
  describe('POST /api/auth/register', () => {
    it('should register user', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          first_name: 'tester',
          last_name: 'tester',
          email: 'registertest@yahoo.com',
          password: 'test'
        })
        .then(res => {
          expect(res.status).toBe(200);
        })
    })
    it('should return json object', () => {
        return request(server)
        .post('/api/auth/register')
        .send({
          first_name: 'tester',
          last_name: 'tester',
          email: 'registertest@yahoo.com',
          password: 'test'
        })
        .then(res => {
          expect(res.type).toMatch(/json/i); //i means ignore case
        })
    })
  })

  //test the login endpoint
  describe('POST /api/auth/login', () => {
    it('should be a success', () => {
        return request(server)
        .post('/api/auth/login')
        .send({
            email: "registertest@yahoo.com",
            password: "test"
        })
        .then(res => {
            expect(res.status).toBe(200);
        })
    });
  });
  it('returns JSON', () => {
      return request(server)
      .post('/api/auth/login')
      .send({
          email: "registertest@yahoo.com",
          password: "test"
      })
      .then(res => {            
          expect(res.type).toMatch(/json/i); //i means ignore case
      });
  });

});