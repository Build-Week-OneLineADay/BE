//import express
const express = require('express');

//import database object
const db = require('../data/dbConfig.js');

//export functions
module.exports = {
    findAllPosts, 
    findPostById,
    findPostsByUserId, 
    findUserPostsByDate,
    findPostByTextEntry,    
    addJournalPost, 
    updateJournalPost, 
    removeJournalPost
};

//define CRUD methods
//returns user id because user id is in the posts table
function findAllPosts(){

    return db('posts');
}

//find a post by post id:api/journal/posts/:id
//returns the user id because it is in the posts table
function findPostById(id){

    return db('posts')
    .where({ 'posts.id': id})
    .first();
}

//return all user journal entries by user id:api/journal/users/:id/posts
//this does not return the user id/excluded from select statement
function findPostsByUserId(id){
    return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id')   
    .where({ 'posts.user_id': id }) //where the user id in the posts table is equal to the id entered  
    .select('posts.id', 'posts.title', 'posts.text_entry', 'posts.created_at')     
    .orderBy( 'posts.created_at' ); //order the posts by date posted
}

//return all user journal entry posts by date:api/journal/users/:id/posts/:date (YYYY-MM-DD)
function findUserPostsByDate(id, date){
    return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id') 
    .where({ 'posts.user_id': id})  
    .where({ 'posts.created_at': date }) //where the user id in the posts table is equal to the id entered 
    .select('posts.id', 'posts.title', 'posts.text_entry', 'posts.created_at')      
    .orderBy( 'posts.created_at' ); //order the posts by date posted
}

//return all user journal entry posts by text entry
function findPostByTextEntry(id, searchtext){
    return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id') 
    .where({ 'posts.user_id': id})      
    .select('posts.id', 'posts.title', 'posts.text_entry', 'posts.created_at')  
    .where( 'posts.text_entry', 'like', `%${searchtext}%` )     
    .orderBy( 'posts.created_at' ); //order the posts by date posted
}

//add a journal entry: api/journal/users/id/posts
//returns user id with post because user id is in the posts table
function addJournalPost({title, text_entry, user_id, created_at}){

    return db('posts')
    .insert({title, text_entry, user_id, created_at}, 'id') //tells postgres to return id with response
    .then( ([id]) => { //square brackets removes the array brackets from the response
        return findPostById(id);
    })
    .catch(error => {
        console.log("post insert error", error);
    })    
}

//update a journal entry: api/journal/posts/id
function updateJournalPost(id, changes){

    console.log("changes object", changes);

    return db('posts')
    .where('posts.id', id)//where the id in the posts table is equal to the id parameter
    .update(changes)
    .then( count => {
        return count > 0 ? findPostById(id) : null;   //return the newly updated record   
    })
    .catch(error => {
        console.log("post update error", error);
    })  
}

//remove a journal entry: api/journal/posts/id
function removeJournalPost(id){

    return db('posts')
    .where('posts.id', id)//where the id in the posts table is equal to the id that was entered    
    .delete()  
    .then( count => {       
        return count > 0 ? count : null;    
    })

}









