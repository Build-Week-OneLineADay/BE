//import moment
var moment = require('moment');

exports.up = function(knex) {

    return knex.schema

    //users tables
    .createTable('users', tbl => {

        //primary key
        tbl.increments();

        tbl.string('first_name', 255)
        .notNullable();

        tbl.string('last_name', 255)
        .notNullable();

        tbl.string('email', 255)
        .unique()
        .notNullable();
        
        tbl.string('password', 255)
        .notNullable();       

    }) 

    //posts table
    .createTable('posts', tbl => {

        //primary key
        tbl.increments();

        tbl.string('title', 255);        

        tbl.text('text_entry')
        .notNullable();        

        //tbl.date('created_at').defaultTo(knex.fn.now());  //displays date in yyyy-mm-dd hh:mm:ss format 
        
        //tbl.datetime('created_at').defaultTo(knex.fn.now('now()'));

        //formats date in MM-DD-YYYY format
        tbl.datetime('created_at').defaultTo(moment(knex.fn.now('now()')).format("MM-DD-YYYY"));    

        //foreign key
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });    
};

exports.down = function(knex) {

    //drop in the opposite order
    return knex.schema
    //drop FK table first then PK table     
    .dropTableIfExists('posts')
    .dropTableIfExists('users');

};
