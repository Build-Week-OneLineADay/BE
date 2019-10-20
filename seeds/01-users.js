//import bcrypt
const bcrypt = require ('bcrypt');

exports.seed = function(knex) {
  
      return knex('users').insert([

        {first_name: 'john', last_name: 'doe', email: 'johndoe@yahoo.com', password: `${bcrypt.hashSync('test', 8)}`}, //1
        {first_name: 'mary', last_name: 'jane', email: 'maryjane@yahoo.com', password: `${bcrypt.hashSync('test', 8)}`}, //2 
        {first_name: 'pam', last_name: 'smith', email: 'pam@yahoo.com', password: `${bcrypt.hashSync('test', 8)}`}, //3
        {first_name: 'eric', last_name: 'joe', email: 'eric@yahoo.com', password: `${bcrypt.hashSync('test', 8)}`}, //4
        {first_name: 'enid', last_name: 'brown', email: 'enid@yahoo.com', password: `${bcrypt.hashSync('test', 8)}`}, //5
        {first_name: 'jason', last_name: 'black', email: 'jason@yahoo.com', password: `${bcrypt.hashSync('test', 8)}`}, //6              
        
      ]);
    
};