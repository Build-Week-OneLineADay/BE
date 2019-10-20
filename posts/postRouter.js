//import express
const express = require('express');

//import data access file
const postDB = require('./postModel.js');

//create router
const postRouter = express.Router();

/**************************************endpoints beginning with /api/journal**************************************/
//return user posts by user id: api/journal/users/id/posts
userRouter.get('/users/:id/posts', (req, res) => {

    const { id } = req.params;

    postDB.findUserJournalEntries(id)
    .then(user => {        
        res.status(200).json(user);        
    })
    .catch(error => {
        console.log("retrieve single user error", error);
        res.status(500).json({ error: 'There was an error retrieving the user from the database.'});
    })
})

//return user posts by date: api/journal/users/id/posts/date
userRouter.get('/users/:id/posts/:date', (req, res) => {

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

//add a journal entry: api/journal/users/id/posts
userRouter.post('/users/:id/posts', (req, res) => {

    const { id } = req.params;
    const post = req.body;

    post.user_id = id; //assign the id in parameter to the user_id foreign key in posts
    
    postDB.addJournalPost(id, post)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error add the post to the database.'})
    })

})

//update a journal entry: api/journal/posts/id
userRouter.put('/posts/:id', (req, res) => {

    const { id } = req.params;
    const changes = req.body;
    
    postDB.findPostById(id)
    .then(post => {
        if(post){
            postDB.updateJournalPost(id, changes)
            .then(updatedPost => {
                res.status(200).json(updatedPost);
            })
            
        }
        else {
            res.status(400).json({ message: 'A post with that id does not exist.'})
        }
    })    
    .catch(error => {
        res.status(500).json({ error: 'There was an error updating the post in the database.'})
    })

})

//update a journal entry: api/journal/posts/id
userRouter.put('/posts/:id', (req, res) => {

    const { id } = req.params;
    const changes = req.body;
    
    postDB.findPostById(id)
    .then(post => {
        if(post){
            postDB.updateJournalPost(id, changes)
            .then(updatedPost => {
                res.status(200).json(updatedPost);
            })
            
        }
        else {
            res.status(400).json({ message: 'A post with that id does not exist.'})
        }
    })    
    .catch(error => {
        res.status(500).json({ error: 'There was an error updating the post in the database.'})
    })

})

//delete a journal entry: api/journal/posts/id
userRouter.delete('/posts/:id', (req, res) => {

    const { id } = req.params;
  
    postDB.removeJournalPost(id)
    .then(count => {
      if (count) {//returns the count of records deleted
        console.log("deleted", deleted);
        res.status(200).json( {message: `Deleted ${count} record(s).`});
      } else {      
        res.status(404).json({ message: 'A post with that id does not exist.' });
      }
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error removing the post from the database.'})
    })

  });

  module.exports = postRouter;