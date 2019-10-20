//import express
const express = require('express');

//import database object
const db = require('../data/dbConfig.js');

//export functions
module.exports = {
    findPostById,
    findPostsByUserId,
    findUserPostsByDate,    
    findUserPostsTenYear,
    addJournalPost,
    updateJournalPost,
    removeJournalPost
};

function findPostById(id){

    return db('posts')
    .where({ 'posts.id': id})
    .first();

}

//return all user journal entries by user id:api/users/:id/posts
function findPostsByUserId(id){
    return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id')   
    .where({ 'posts.user_id': id }) //where the user id in the posts table is equal to the id entered  
    .select('posts.id', 'posts.title', 'posts.text_entry', 'posts.created_at')     
    .orderBy( 'posts.created_at' ); //order the posts by date posted
}

//return all user journal entries post date:api/users/;id/posts/:date (YYYY-MM-DD)
function findUserPostsByDate(id, date){
    return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id') 
    .where({ 'posts.user_id': id})  
    .where({ 'posts.created_at': date }) //where the user id in the posts table is equal to the id entered 
    .select('posts.id', 'posts.title', 'posts.text_entry', 'posts.created_at')      
    .orderBy( 'posts.created_at' ); //order the posts by date posted
}

//add a journal entry: api/users/id/posts
function addJournalPost(id, post){

    return db('posts')
    .insert(post, id)
    .then( ([id]) => {
        return findPostById(id);
    })
    .catch(error => {
        console.log("post insert error", error);
    })    
}

//update a journal entry: api/posts/id
function updateJournalPost(id, changes){

    return db('posts')
    .where('posts.id', id)//where the id in the posts table is equal to the id parameter
    .update(changes)
    .then( count => {
        return count > 0 ? findPostById(id) : null;   //return the newly updated record   
    })
}

function removeJournalPost(id){

    return db('posts')
    .where('posts.id', id)//where the id in the posts table is equal to the id that was entered    
    .delete()  
    .then( count => {
        //return count > 0 ? findById(id) : null;  
        return count > 0 ? count : null;    
    })

}

/*get current date
select all from the posts table where the month and day is the same
for ten years

//return all user journal entries post date:api/users/:id/posts/tenyear (YYYY-MM-DD)
function findUserPostsTenYear(id, date){
    return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id')    
    .where({ 'posts.user_id': id }) //where the user id in the posts table is equal to the id entered       
    .orderBy( 'datetime' ); //order the posts by date posted
}*/







