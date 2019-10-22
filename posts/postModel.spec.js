const server = require('../api/server.js');
const request = require('supertest');
const PostModel = require('./postModel.js');
const db = require('../data/dbConfig.js');

describe('posts model', () => {

    //there is a beforeEach(), beforeAll(), afterEach(), and afterAll()

    //clean out users table before each test runs
    beforeEach(async () => {
        await db('posts').truncate();
    })

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');

    })
   
});

//***************************************TESTING DELETE****************************************
describe('removeUser()', () => {   
    
    //clean out users table before delete tests run
    beforeEach(async () => {
        await db('users').truncate();
    })

    //*****************TEST ONE**************************/
    it('should insert the provided user into the database (delete)', async () => {
        //first insert a record
        await UserModel.addUser({ 
                first_name: 'Tisha', 
                last_name: 'Holder', 
                email: 'tisha@yahoo.com',                  
                password: 'test' 
        });

        //select all records from the users table and assign the results to usermodel
        let usermodel = await db('users');

         //assert the record was inserted
         expect(usermodel).toHaveLength(1);
    })


        //*****************TEST TWO**************************/ 
        //there should be only one user in the database after the beforeEach() and insert above
        //therefore remove the user with 1 as their id   
        it('should remove the provided user from the db', async () => {
            let user = await UserModel.removeUser({ id: 1 });   

        //select all records from the users table and assign the results to usermodel
        let usermodel = await db('users');

        //assert the record was deleted
        //after deleting the user record there should be no records left in the users table
        //therefore the length should be zero(0)
        expect(usermodel).toHaveLength(0); 
    

    })

});

//**************************************TESTING REGISTER*******************************/
describe('addUser()', () => {

    //clean out users table before delete tests run
    beforeEach(async () => {
        await db('users').truncate();
    })

    //*****************TEST ONE**************************/
    it('should insert/register users into the database', async () => {
        //insert a record
        await UserModel.addUser({ 
                first_name: 'Tisha', 
                last_name: 'Holder', 
                email: 'tisha2@yahoo.com',                 
                password: 'test' 
        });

        //select all records from the users table and assign the results to usermodel
        let usermodel = await db('users');

         //assert the record was inserted and the returned array has a length = 1
         expect(usermodel).toHaveLength(1);
    });

    //*****************TEST TWO**************************/
    // note we're checking one user at a time
    it('should insert the provided user into the db', async () => {
        let user = await UserModel.addUser({ 
            first_name: 'Eric', 
            last_name: 'Holder', 
            email: 'eric@yahoo.com',            
            password: 'test' 
        });    

        expect(user.first_name).toBe('Eric');
  
        //note how we're reusing the user variable
         user = await UserModel.addUser({ 
             first_name: 'Pam', 
             last_name: 'Holder', 
             email: 'pam@yahoo.com',            
             password: 'test' 
         });
 
         expect(user.first_name).toBe('Pam');         
 
     });

    
});

//**************************************TESTING UPDATE*******************************/
describe('updateUser()', () => {

    //clean out users table before delete tests run
    beforeEach(async () => {
        await db('users').truncate();
    })

    //*****************TEST ONE**************************/
    it('should insert/register users into the database (update)', async () => {
        //insert two records in the database. will update one of them.
        await UserModel.addUser({ 
                first_name: 'Tisha', 
                last_name: 'Holder', 
                email: 'tisha@yahoo.com',                 
                password: 'test' 
        });

        await UserModel.addUser({ 
            first_name: 'Tisha Updated', 
            last_name: 'Holder Udated', 
            email: 'tisha2@yahoo.com',                 
            password: 'test' 
        });

        //select all records from the users table and assign the results to usermodel
        let usermodel = await db('users');

         //assert the record was inserted and the returned array has a length = 1
         expect(usermodel).toHaveLength(2);         
   

       //*****************TEST TWO**************************/    

       //create a new user object with the details to pass to the updateUser method
        let userToUpdate =  { 
            first_name: 'Tisha Updated 2', 
            last_name: 'Holder Udated 2', 
            email: 'tisha22@yahoo.com',                 
            password: 'test' 
        };
        
        //stores the user record after it is updated into updatedUser
        let updatedUser = await UserModel.updateUser(2, userToUpdate);
        

        //tests if the user was updated by checking if the first name changed
        expect(updatedUser.first_name).toBe('Tisha Updated 2');
 
     })
 
});

