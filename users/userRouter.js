//import express
const express = require('express');

//import data access file
const userDB = require('./userModel.js');

//create router
const userRouter = express.Router();

/**************************************endpoints beginning with /api/users**************************************/
//returns all users
userRouter.get('/', (req, res) => {

    userDB.find()
    .then(users => {        
        res.status(200).json({ users });
        
    })
    .catch(error => {
        console.log("retrieve users error", error);
        res.status(500).json({ error: 'There was an error retrieving the users from the database.'});
    })
})

//return user by id
userRouter.get('/:id', (req, res) => {

    const { id } = req.params;

    userDB.findById(id)
    .then(user => {        
        res.status(200).json(user);        
    })
    .catch(error => {
        console.log("retrieve single user error", error);
        res.status(500).json({ error: 'There was an error retrieving the user from the database.'});
    })
})

//export router
module.exports = userRouter;