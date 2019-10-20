//import bcrypt
const bcrypt = require ('bcrypt');

exports.seed = function(knex) {
  
      return knex('posts').insert([

        {title: 'today', text_entry: 'test test test', created_at: '2019-10-19', user_id: '1'}, //1
        {title: 'tomorrow', text_entry: 'test test test', created_at: '2019-09-11', user_id: '1'}, //2

        {title: 'next week', text_entry: 'test test test', created_at: '2019-08-19', user_id: '2'}, //3
        {title: 'this week', text_entry: 'test test test', created_at: '2019-06-19', user_id: '2'}, //4

        {title: 'this month', text_entry: 'test test test', created_at: '2019-07-19', user_id: '3'}, //5
        {title: 'next month', text_entry: 'test test test', created_at: '2019-08-22', user_id: '3'}, //6  
        
        {title: 'this year', text_entry: 'test test test', created_at: '2019-01-15', user_id: '4'}, //7
        {title: 'next year', text_entry: 'test test test', created_at: '2019-02-13', user_id: '4'}, //8

        {title: 'christmas', text_entry: 'test test test', created_at: '2019-03-12', user_id: '5'}, //9
        {title: 'my birthday', text_entry: 'test test test', created_at: '2019-09-17', user_id: '5'}, //10

        {title: 'halloween', text_entry: 'test test test', created_at: '2019-05-13', user_id: '6'}, //11
        {title: 'thanksgiving', text_entry: 'test test test', created_at: '2019-04-16', user_id: '6'}, //12
        
      ]);
    
};