//import express
const express = require('express');

//import database object
const db = require('../data/dbConfig.js');

//export functions
module.exports = {
    findAllUsers,
    findUserByEmail, //login
    findUserById, //   
    addUser, //register  
    findUserJournalEntries

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
        return findById(id);
    })
}





