//import express
const express = require('express');

//import database object
const db = require('../data/dbConfig.js');

//export functions
module.exports = {
    findAllUsers,
    findUserByEmail, //login
    findUserById,    
    addUser, //register 
    updateUser,
    removeUser
};

//define CRUD methods
function findAllUsers(){

    return db('users');
}

function findUserByEmail({ email }){

    return db('users')
    .where({ 'users.email': email})
    .first();
}

function findUserById(id){

    return db('users')
    .where({ 'users.id': id })
    .first();    
}

function addUser({ first_name, last_name, email, password }){

    return db('users')
    //'id' tells the db to return the id after insert. not necessary with sqlite3 but needed for postgres
    .insert(({ first_name, last_name, email, password }), 'id')
    .then ( ([id]) => {
        return findUserById(id);//finds the user with the id that was returned and returns the user object to front end
    })
}

function updateUser(id, changes){

    return db('users')
    .where('users.id', id)
    .update(changes)
    .then( count => {
        return count > 0 ? findUserById(id) : null;   //must use return to return the newly updated record   
    })
}

function removeUser(id){

    return db('users')
    .where('users.id', id)
    .delete()
    .then( count => {
        return count > 0 ? count : null;    
    })

}






