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
    //findUserPostsTenYears,
    addJournalPost,
    updateJournalPost,
    removeJournalPost
};

//define CRUD methods
function findAllPosts(){

    return db('posts');
}

//find a post by post id:api/journal/posts/:id
function findPostById(id){

    return db('posts')
    .where({ 'posts.id': id})
    .first();

}

//return all user journal entries by user id:api/journal/users/:id/posts
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
    .select('posts.id as post_id', 'posts.title', 'posts.text_entry', 'posts.created_at', 'users.id as user_id')      
    .orderBy( 'posts.created_at' ); //order the posts by date posted
}

//add a journal entry: api/journal/users/id/posts
function addJournalPost(id, post){

    return db('posts')
    .insert(post, id) //tells postgres to return id with response
    .then( ([id]) => { //square brackets removes the array brackets from the response
        return findPostById(id);
    })
    .catch(error => {
        console.log("post insert error", error);
    })    
}

//update a journal entry: api/journal/posts/id
function updateJournalPost(id, changes){

    return db('posts')
    .where('posts.id', id)//where the id in the posts table is equal to the id parameter
    .update(changes)
    .then( count => {
        return count > 0 ? findPostById(id) : null;   //return the newly updated record   
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


//get current date
//select all from the posts table where the month and day is the same for that user
//for ten years

//return all user journal entries post date:api/journal/users/:id/tenyear/:date (YYYY-MM-DD)
/*function findUserPostsTenYears(id, date){

    return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id')    
    .where({ 'posts.user_id': id }) //where the user id in the posts table is equal to the id entered    
    .where({ 'posts.created_at': date }) //where the user id in the posts table is equal to the id entered
    .andWhereRaw(`strftime('%m', date) = ?`, datePart(month, date))
    .andWhereRaw(`strftime('%d', date) = ?`, datePart(day, date))    
    .select('posts.id', 'posts.title', 'posts.text_entry', 'posts.created_at')      
    .where(DATEADD(year, -10, date ))   
    .orderBy( 'posts.created_at' ) //order the posts by date posted   
   
}*/







