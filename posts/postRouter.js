//import express
const express = require('express');

//import moment
var moment = require('moment');

//import data access file
const postDB = require('./postModel.js');

//import data access file
const userDB = require('../users/userModel.js');

const authenticate = require('../auth/authMiddleware.js');

//create router
const postRouter = express.Router();

/**************************************endpoints beginning with /api/journal**************************************/

//returns all posts: api/journal/posts
postRouter.get('/posts', authenticate, (req, res) => {

    postDB.findAllPosts()
    .then(posts => { 
        if(posts.length > 0){            
            res.status(200).json({ posts });
        }
        else {
            res.status(404).json({ message: 'No journal entries were found.'})
        }
        
    })
    .catch(error => {
        console.log("retrieve users error", error);
        res.status(500).json({ error: 'There was an error retrieving the journal entries from the database.'});
    })
})

//find a post by post id:api/journal/posts/:id
postRouter.get('/posts/:id', validatePostId, (req, res) => {

    const { id } = req.params;

    postDB.findPostById(id)
    .then(post => {            
        res.status(200).json(post); 
       
    })
    .catch(error => {
        console.log("retrieve posts by post id error", error);
        res.status(500).json({ error: 'There was an error retrieving the posts from the database.'});
    })
})
//return user posts by user id: api/journal/users/id/posts
postRouter.get('/users/:id/posts', validateUserId, (req, res) => {

    const { id } = req.params;

    postDB.findPostsByUserId(id)
    .then(posts => {  
        if(posts){      
            res.status(200).json(posts);   
        }
        else{
            res.status(404).json({ message: 'There are no posts for that user.' });
        }     
    })
    .catch(error => {
        console.log("retrieve posts by user id error", error);
        res.status(500).json({ error: 'There was an error retrieving the posts from the database.'});
    })
})

//return user posts by date: api/journal/users/id/posts/date
postRouter.get('/users/:id/posts/:date', validateUserId, validatePostDate, (req, res) => {

    const id = req.params.id;
    const date = req.params.date;    
  
    postDB.findUserPostsByDate(id, date)
    .then(posts => {
      if (posts) {
         res.status(200).json(posts);
      }
      else {
        res.status(404).json({ message: 'There are no posts for that date.' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'There was an error retrieving posts for that date.' });
    });
})

//return user posts by date: api/journal/users/id/tenyear/date
postRouter.get('/users/:id/tenyear/:date', validateUserId, validatePostDate, (req, res) => {

    const id = req.params.id;
    const date = req.params.date;    
  
    postDB.findUserPostsTenYears(id, date)
    .then(posts => {
      if (posts) {
         res.status(200).json(posts);
      }
      else {
        res.status(404).json({ message: 'There are no posts for that date.' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'There was an error retrieving posts for that date.' });
    });
})

//add a journal entry: api/journal/users/id/posts
postRouter.post('/users/:id/posts', validateUserId, validatePostInfo, (req, res) => {

    const { id } = req.params;
    const post = req.body;

    post.user_id = id; //assign the id in parameter to the user_id foreign key for the post
    
    postDB.addJournalPost(id, post)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error adding the post to the database.'});
    })
    
})

//update a journal entry: api/journal/posts/id
postRouter.put('/posts/:id', validatePostId, validatePostInfo, (req, res) => {

    const { id } = req.params;
    const changes = req.body;
    
    postDB.updateJournalPost(id, changes)
    .then(updatedPost => {
        res.status(200).json(updatedPost);
    })         
    .catch(error => {
        res.status(500).json({ error: 'There was an error updating the post in the database.'})
    })

})

//delete a journal entry: api/journal/posts/id
postRouter.delete('/posts/:id', validatePostId, (req, res) => {

    const { id } = req.params;
  
    postDB.removeJournalPost(id)
    .then(count => {     
        console.log("deleted posts", count);
        res.status(200).json( {message: `Deleted ${count} journal post(s).`});     
    })
    .catch(error => {
        console.log("post removal error", error);
        res.status(500).json({ error: 'There was an error removing the post from the database.'})
    })

});

/******************************************custom/local middleware*************************************/
function validatePostId(req, res, next){

    const postId = req.params.id;

    postDB.findPostById(postId)
    .then(post => {
        if(post){
            next();
        }
        else {
            res.status(404).json( {message: 'A post with that id does not exist.'} );
        }
    })
};


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

//validates date format
function validatePostDate(req, res, next){

    const postDate = req.params.date;

    //let dateEntered = moment(postDate);

    if (!moment(postDate,'MM-DD-YYYY').isValid()) {
        res.status(404).json( {message: 'Date must be in the format MM-DD-YYYY.'} );
    } 
    else {
        next();
    }

    /*if(postDate.isValid()){
        next();
    }
    else {
        res.status(404).json( {message: 'Date must be in the format YYYY-MM-DD.'} );
    }*/

};

function validatePostInfo(req, res, next){
    
    const postObject = req.body;
    const postTitle = postObject.title;
    const postText = postObject.text_entry;    

    if(!postObject){
        res.status(400).json( {message: 'Missing post data.'} );
    }
   else if(!postTitle){
       res.status(400).json( {message: 'Missing required post title.'} );
    }
    else if(!postText){
        res.status(400).json( {message: 'Missing required post text.'} );
    }
    else {
        next();
    }
};

  module.exports = postRouter;