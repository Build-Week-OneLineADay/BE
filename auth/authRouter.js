//create auth router
const authRouter = express.Router();

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//import data access file
const authDB = require('../users/userModel.js');

//import secrets
const secrets = require ('../config/secrets.js');

/**************************************endpoints beginning with /api/auth**************************************/
authRouter.post('/register', (req, res) => {

     //destructure the info received from req.body
     const { first_name, last_name, email, password } = req.body;

     //hash the password. 8 indicates hashing rounds (2^8) and how we slow down attackers trying to pregenerate hashes
     //Having an algorithm that hashes the information multiple times (rounds) means an attacker needs to 
     //have the hash, know the algorithm used, and how many rounds were used to generate the hash in the first place.
     const hash = bcrypt.hashSync(password, 8);
 
     authDB.add({ first_name, last_name, email, password: hash })
     .then(user => {

        //send a token when the user registers so they can log in automatically
        res.status(200).json(user);
     })
     .catch(error => {
         console.log("registration error", error);
         res.status(500).json({ error: 'There was a registration error.'})
     })

})

authRouter.post('/login', (req, res) => {

    const { email, password } = req.body;    

    authDB.findByEmail({ email })    
    .then(user => {             
        //check that passwords match
        if(user && bcrypt.compareSync(password, user.password)){

            //generate token after a successful log in
            const token = generateToken(user);
            
            //pass token along with response body
            res.status(200).json({ 
                message: `Welcome ${user.first_name}!`, 
                 user : {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.username,
                        password: user.password                        
                },
                token,                  
             });
        }
        else {
            // we will return 401 if the password or username are invalid
            // we don't want to let attackers know when they have a good username
            res.status(401).json({ message: 'Invalid Credentials!'});
        }
    })
    .catch(error => {
        console.log("log in error", error);
        res.status(500).json({ error: 'There was an error signing the user into the database.'});
    })
})

//could be in a separate file
function generateToken(user){

    //information about the payload, info we want to store along with that token
    //put info front end might need like user role(admin/reg user), id, username, etc.
    const payload = {
        email: user.email,
        id: user.id        

    };

    //determines when token is going to expire
    const options = {
        expiresIn: '1d' //expires in 1 day
    };

    //calls jwt's sign method
    //secret is used to protect the token
    //library will produce a signature based on the secret you give it
    //secrets.jwtSecret is referring to the imported jwtSecret object from the config/secrets.js file
    return jwt.sign(payload, secrets.jwtSecret, options);

}

//export router
module.exports = authRouter;






