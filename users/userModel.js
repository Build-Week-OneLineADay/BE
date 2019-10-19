//import express
const express = require('express');

//import database object
const db = require('../data/dbConfig.js');

//export functions
module.exports = {
    find,
    findByEmail, //login
    findById, //   
    add //register  

};

//define CRUD methods
function find(){

    return db('users');
}

function findByEmail({ email }){

    return db('users')
    .where({ 'users.email': email})
    .first();
}

function findById(id){

    return db('users')
    .where({ 'users.id': id })
    .first();    
}

function add({ first_name, last_name, email, password }){

    return db('users')
    //'id' tells the db to return the id after insert. not necessary with sqlite3 but needed for postgres
    .insert(({ first_name, last_name, email, password }), 'id')
    .then ( ([id]) => {
        return findById(id);
    })
}


