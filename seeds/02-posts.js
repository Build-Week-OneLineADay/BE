//import bcrypt
const bcrypt = require ('bcrypt');

exports.seed = function(knex) {
  
      return knex('posts').insert([

        {title: 'today', text_entry: 'test test test 1', user_id: '1'}, //1
        {title: 'tomorrow', text_entry: 'test test test 2', user_id: '1'}, //2

        {title: 'next week', text_entry: 'test test test 3', user_id: '1'}, //3
        {title: 'this week', text_entry: 'test test test 4', user_id: '1'}, //4

        {title: 'this month', text_entry: 'test test test 5', user_id: '2'}, //5
        {title: 'next month', text_entry: 'test test test 6', user_id: '2'}, //6  
        
        {title: 'this year', text_entry: 'test test test 7', user_id: '2'}, //7
        {title: 'next year', text_entry: 'test test test 8', user_id: '2'}, //8

        {title: 'christmas', text_entry: 'test test test 9', user_id: '3'}, //9
        {title: 'my birthday', text_entry: 'test test test 10', user_id: '3'}, //10

        {title: 'halloween', text_entry: 'test test test 11', user_id: '3'}, //11
        {title: 'thanksgiving', text_entry: 'test test test 12', user_id: '3'}, //12
        
      ]);
    
};
