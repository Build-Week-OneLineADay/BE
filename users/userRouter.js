//import express
const express = require('express');

//import data access file
const userDB = require('./userModel.js');

//create router
const userRouter = express.Router();

/**************************************endpoints beginning with /api/users**************************************/
//returns all users: api/users
userRouter.get('/', (req, res) => {

    userDB.findAllUsers()
    .then(users => {        
        res.status(200).json({ users });
        
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
userRouter.get('/:id', (req, res) => {

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

//export router
module.exports = userRouter;