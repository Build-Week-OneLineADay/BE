
//server uses this middleware to verify that the user is logged in before providing access to any of our endpoints
//import json web token
const jwt = require('jsonwebtoken'); //give us the ability to verify the token

const secrets = require('../config/secrets.js');

function authenticate (req, res, next){

    //most companies are going to use a specific header called authorization to verify token
    //generally we want to include the tokens inside the headers
    //we don't want to send bodies with get requests
    const token = req.headers.authorization;
    
    //check to see if user has a valid token along with their request
    //if valid token was provided
    if(token){
        //verify that token hasn't been tampered with or that it hasn't expired
        //once you verify token the callback function will be called
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err){
                //means token expired or is invalid
                res.status(401).json({ message: 'Authorization token is not valid!'});
            }
            else {
                //means token is good
                //the decoded web token has all the information we put inside the payload
                //in the generateToken function in authRouter.js
                //grab the email from the payload in the token passed to jwt.verify
                //the email and id is included/sent in the payload in the generateToken function in authRouter.js                              
                req.user = {email: decodedToken.email};
                                
                next(); //move on to the requested endpoint                
            }
        });        
    }       
    else {
        res.status(401).json({ message: 'Please log in or sign up!'});       
    }
}

//export the restricted function
module.exports = authenticate;
