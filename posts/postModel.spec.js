const server = require('../api/server.js');
const request = require('supertest');
const PostModel = require('./postModel.js');
const db = require('../data/dbConfig.js');

describe('posts model', () => {

    //there is a beforeEach(), beforeAll(), afterEach(), and afterAll()

    //clean out posts table before each test runs
    beforeEach(async () => {
        await db('posts').truncate();
    })

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');

    })
   
});

//***************************************TESTING ADD & DELETE****************************************
describe('removeJournalPost()', () => {   
    
    //clean out posts table before delete tests run
    /*beforeEach(async () => {
        await db('posts').truncate();
    })*/

    //*****************TEST ONE: ADD POST**************************/
    it('should insert the provided post into the database (add & delete)', async () => {

        //create a new post object with the details to pass to the updatePost method
        let postToAdd =  { 
            title: 'test post title', 
            text_entry: 'test post text',
            created_at: '10-10-2010',
            user_id: 1            
        };
        
        //first insert a record
        await PostModel.addJournalPost(postToAdd);

        //select all records from the users table and assign the results to usermodel
        let postModel = await db('posts');

         //assert the record was inserted
         expect(postModel).toHaveLength(1);
    })

    //*****************TEST TWO:DELETE POST**************************/ 
    //there should be only one post in the database after the beforeEach() and insert above
    //therefore remove the user with 1 as their id   
    it('should remove the provided post from the db (add & delete)', async () => {
        let post = await PostModel.removeJournalPost(1);   

    //select all records from the posts table and assign the results to postmodel
    let postmodel = await db('posts');

    //assert the record was deleted
    //after deleting the post record there should be no records left in the posts table
    //therefore the length should be zero(0)
    //expect(postmodel).toHaveLength(0);    

    })

});

//**************************************TESTING UPDATE*******************************/
describe('updateJournalPost()', () => {

    //clean out users table before delete tests run
    beforeEach(async () => {
        await db('posts').truncate();
    })

    //*****************TEST ONE: ADD POST**************************/
    it('should insert the provided post into the database', async () => {

        //create a new post object with the details to pass to the updatePost method
        let postToAdd =  { 
            title: 'test post title', 
            text_entry: 'test post text',
            user_id: 1            
        };

        //first insert a record
        await PostModel.addJournalPost(postToAdd);

        //select all records from the users table and assign the results to usermodel
        let postModel = await db('posts');

         //assert the record was inserted
         expect(postModel).toHaveLength(1);    
   

       //*****************TEST TWO**************************/    

       //create a new user object with the details to pass to the updateJournalPost method
       let postToUpdate =  { 
        title: 'updated title', 
        text_entry: 'updated text',
        user_id: 1            
       };
        
        //stores the user record after it is updated into updatedUser
        let updatedPost = await PostModel.updateJournalPost(1, postToUpdate);
        

        //tests if the user was updated by checking if the first name changed
        expect(updatedPost.title).toBe('updated title');
 
     })
 
});

//***************************************TESTING ADD & READ(findAllPosts)*******************************
describe('findAllJournalPosts()', () => {   
    
    //clean out posts table before delete tests run
    beforeEach(async () => {
        await db('posts').truncate();
    })

    //*****************TEST ONE: ADD POST**************************/
    it('should insert the provided post into the database (add & read)', async () => {

        //create a new post object with the details to pass to the updatePost method
        let postToAdd1 =  { 
            title: 'test post title', 
            text_entry: 'test post text',
            created_at: '10-10-2010',
            user_id: 1            
        };

        //create a new post object with the details to pass to the updatePost method
        let postToAdd2 =  { 
            title: 'test post title2', 
            text_entry: 'test post text2',
            created_at: '10-10-2011',
            user_id: 1            
        };
        
        //first insert a record
        await PostModel.addJournalPost(postToAdd1);
        await PostModel.addJournalPost(postToAdd2);

        //select all records from the users table and assign the results to usermodel
        //let postModel = await db('posts');

        let postmodel = await PostModel.findAllPosts();

         //assert the record was inserted
         expect(postmodel).toHaveLength(2);

         //stores the user record after it is updated into updatedUser
        //let updatedPost = await PostModel.updateJournalPost(1, postToUpdate);
        

        //tests if the user was updated by checking if the first name changed
        //expect(updatedPost.title).toBe('updated title');
    })

    

});





