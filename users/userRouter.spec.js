const request = require('supertest'); // calling it "request" is a common practice

const server = require('../api/server.js');//this is our first red, file doesn't exist yet

const db = require('../data/dbConfig.js');

describe('userRouter.js', () => {

  //there is a beforeEach(), beforeAll(), afterEach(), and afterAll()

  //clean out users table before each test runs
  beforeEach(async () => {
      await db('users').truncate();
  })

  it('should set environment to testing', () => {
      expect(process.env.DB_ENV).toBe('testing');

  })
 
});

/************************users without a token cannot access the users endpoint************************/
describe('userRouter.js', () => {
 
  describe('GET /api/users', () => {
    //returns a promise
    it('should return 401 Unauthorized without a token', () => {       
        return request(server)
        .get('/api/users')
        .then(res => {
            
            expect(res.status).toBe(401);
        });    
    });
    
  });

  
});
