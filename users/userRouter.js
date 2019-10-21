//import express
const express = require('express');

//import data access file
const userDB = require('./userModel.js');

//create router
const userRouter = express.Router();

const authenticate = require('../auth/authMiddleware.js');

/**************************************endpoints beginning with /api/users**************************************/
//returns all users: api/users
userRouter.get('/', authenticate, (req, res) => {

    userDB.findAllUsers()
    .then(users => { 
        if(users.length > 0){            
            res.status(200).json({ users });
        }
        else {
            res.status(404).json({ message: 'There are no registered users.'})
        }
        
    })
    .catch(error => {
        console.log("retrieve users error", error);
        res.status(500).json({ error: 'There was an error retrieving the users from the database.'});
    })
})

/******EXAMPLE: USING ASYNC & AWAIT
 userRouter.get('/', async (req, res) => { //have to use async here

    //use try & catch as there is no .catch
    try {
    let users = await userDB.find(); //the array of users is now in the users variable
    res.status(200).json(users);
    }
    catch{
        res.status(500).json({ error: 'There was an error retrieving the users from the database.'});
    }

 })
 
*/

//return user by id: api/users/id
userRouter.get('/:id', validateUserId, (req, res) => {

    const { id } = req.params;

    userDB.findUserById(id)
    .then(user => {        
        res.status(200).json(user);        
    })
    .catch(error => {
        console.log("retrieve single user error", error);
        res.status(500).json({ error: 'There was an error retrieving the user from the database.'});
    })
})

/******EXAMPLE: USING ASYNC & AWAIT
 userRouter.get('/:id', async (req, res) => { //have to use async here

    const { id } = req.params;

    //use try & catch as there is no .catch
    try {
    let user = await userDB.findById({ id }); //the array of users is now in the users variable
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(400).json({message: 'That user id does not exist.'})
        }
    }
    catch{
        res.status(500).json({ error: 'There was an error retrieving the user from the database.'});
    }

 })
 
*/

//update a user: api/users/id
userRouter.put('/:id', validateUserId, validateUserInfo, (req, res) => {

    const { id } = req.params;
    const changes = req.body;
       
    userDB.updateUser(id, changes)
    .then(updatedUser => {
        res.status(200).json(updatedUser);
    })       
    .catch(error => {
        console.log("update user error", error);
        res.status(500).json({ error: 'There was an error updating the user in the database.'})
    })

})

//delete a user: api/users/id
userRouter.delete('/:id', validateUserId, (req, res) => {

    const { id } = req.params;
  
    userDB.removeUser(id)
    .then(count => {//returns the count of records deleted      
        console.log("deleted", count);
        res.status(200).json( {message: `Deleted ${count} record(s).`});
        
    })
    .catch(error => {
        console.log("delete user error", error);
        res.status(500).json({ error: 'There was an error removing the user from the database.'})
    })

  });

/******************************************custom/local middleware*************************************/
function validateUserId(req, res, next){

    const userId = req.params.id;

    userDB.findUserById(userId)
    .then(user => {
        if(user){
            next();
        }
        else {
            res.status(404).json( {message: 'A user with that id does not exist.'} );
        }
    })
    

};

function validateUserInfo(req, res, next){
    
    const userObject = req.body;
    const firstName = userObject.first_name;
    const lastName = userObject.last_name;
    const email = userObject.email;
    const password = userObject.password;    

    if(!userObject){
        res.status(400).json( {message: 'Missing user data.'} );
    }
    else if(!firstName){
        res.status(400).json( {message: 'Missing required first name.'} );
    }
    else if(!lastName){
        res.status(400).json( {message: 'Missing required last name.'} );
    }
    else if(!email){
        res.status(400).json( {message: 'Missing required email.'} );
    }
    else if(!password){
        res.status(400).json( {message: 'Missing required password.'} );
    }
    else {
        next();
    }
};


//export router
module.exports = userRouter;