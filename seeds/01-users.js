//import bcrypt
const bcrypt = require ('bcrypt');

exports.seed = function(knex) {
  
      return knex('users').insert([

        {
          "id": 1,
          "first_name": "John",
          "last_name": "Doe",
          "email": "johndoe@yahoo.com",
          "password": `${bcrypt.hashSync('test', 8)}`
        }, {
          "id": 2,
          "first_name": "Mary",
          "last_name": "Jane",
          "email": "maryjane@yahoo.com",
          "password": `${bcrypt.hashSync('test', 8)}`
        }, {
          "id": 3,
          "first_name": "Test",
          "last_name": "User",
          "email": "testuser@yahoo.com",
          "password": `${bcrypt.hashSync('test', 8)}`
        },             
        
      ]);
    
};