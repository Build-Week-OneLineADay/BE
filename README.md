
# Users Schema

| Fields     	| Data Type        	| Constraints                                         	|
|------------	|------------------	|-----------------------------------------------------	|
| id         	| unsigned integer 	| primary key, auto-increments, generated by database 	|
| first_name 	| string           	| required                                            	|
| last_name  	| string           	| required                                            	|
| email      	| string           	| required, unique                                    	|
| password   	| string           	| required                                            	|

# Posts Schema

| Fields     	| Data Type        	| Constraints                                         	|
|------------	|------------------	|-----------------------------------------------------	|
| id         	| unsigned integer 	| primary key, auto-increments, generated by database 	|
| title      	| string           	| optional                                            	|
| text_entry 	| string           	| required                                            	|
| created_at 	| date (MM-DD-YYYY)         	| generated by database                               	|
| user_id    	| unsigned integer 	| required, foreign key, references id in users table 	|

**_**Front End: the user_id field for the posts object is for backend purposes only.**


# Endpoints Summary

| Methods 	| Endpoints                                	| Description                                           	|
|---------	|-----------------------------------------	|-------------------------------------------------------	|
| POST    	| /api/auth/register                      	| registers a new user                                  	|
| POST    	| /api/auth/login                         	| logs in a user                                        	|
| GET     	| /api/users                              	| returns all users                                     	|
| GET     	| /api/users/id                           	| returns a user by user id                             	|
| PUT     	| /api/users/id                           	| updates a user                                        	|
| DELETE  	| api/users/id                            	| deletes a user                                        	|
| GET     	| /api/journal/posts                      	| returns all journal entries/posts                     	|
| GET     	| /api/journal/users/id/posts             	| returns a journal entry/post by user id               	|
| GET     	| /api/journal/posts/id                   	| returns a journal entry/post by post id               	|
| GET     	| /api/journal/users/id/search/searchtext 	| returns a journal entry/post that matches search text 	|
| GET     	| /api/journal/users/id/posts/date        	| returns a journal entry/post by user id and date      	|
| POST    	| /api/journal/users/id/posts             	| creates a journal entry/post                          	|
| PUT     	| /api/journal/posts/id                   	| updates a journal entry/post                          	|
| DELETE  	| /api/journal/posts/id                   	| deletes a journal entry/post                          	|


# ENDPOINTS DESCRIPTION

## USER ENDPOINTS

### Registers a New User

**POST** to [https://backend-onelineaday.herokuapp.com/api/auth/register]

Takes an object:

{

    "firstname": "John",

    "lastname": "Doe",

    "email": "johndoe@yahoo.com",

    "password": "test"

}

**Returns**: the created user object included hashed password

{

    "id": 9,

    "first_name": "John",

    "last_name": "Doe",

    "email": "johndoe@yahoo.com",

    "password": "$2b$08$CT0itmYRB8SIJxIyDf.She1qGx0kgSbQRb36tSyc99zkb5A.KkyxS"

}

### Login an Existing User

**POST** to [https://backend-onelineaday.herokuapp.com/api/auth/login]

Takes an object:

{

    "email": "johndoe@yahoo.com",

    "password": "test"

}

**Returns**: an object with a welcome message, a user object, and the authorization token

{

    "message": "Welcome John Doe!",

    "user":

    {

        "id": 8,

        "first_name": "new user",

        "last_name": "new user",

        "email": "johndoe@yahoo.com",

        "password": $2b$08$vkciRT2GRxdDFBgf3VLbMO7oz4loOY1uzyRBDyErulbGdr0BRuPZm"

    },

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzZXIxQHlhaG9vLmIsImlkIjo4LCJp0.O1rXq"

}

### GET a List of All Users

**GET** to [https://backend-onelineaday.herokuapp.com/api/users]

**Returns**: an array of user objects

{

    "users": [

    {

        "id": 1,

        "first_name": "john",

        "last_name": "doe",

        "email": "johndoe@yahoo.com",

        "password": "$2b$08$jkuT9XeczP0zxhQzSQuhsO4vlZnospu4WD0"

    },

    {

        "id": 2,

        "first_name": "mary",

        "last_name": "jane",

        "email": "maryjane@yahoo.com",

        "password": "$2b$08$jkuT9XeczP0zxhQzSQuhsO4vlZnospu4WD0"

    },

    {

        "id": 3,

        "first_name": "new",

        "last_name": "user",

        "email": "newuser@yahoo.com",

        "password": "$2b$08$jkuT9XeczP0zxhQzSQuhsO4vlZnospu4WD0"

    }    

  ]

}

### GET a User By User Id

**GET** to [https://backend-onelineaday.herokuapp.com/api/users/1]

**_*id in URL is user id_**

**Returns**: a user object

{

    "id": 1,

    "first_name": "john",

    "last_name": "doe",

    "email": "johndoe@yahoo.com",

    "password": "$2b$08$jkuT9XeczP0zxhQzSQuhsO4vlZnospu4WD0/oykY55wFhnVJa5QCy"

}

### Update an Existing User

**PUT** to [https://backend-onelineaday.herokuapp.com/api/users/1]

**_*id in URL is user id_**

Takes an object:

{

    "firstname": "John",

    "lastname": "Doe",

    "email": "johndoe@yahoo.com",

    "password": "test"

}

**Returns**: the updated user object included hashed password

{

    "id": 9,

    "first_name": "John",

    "last_name": "Doe",

    "email": "johndoe@yahoo.com",

    "password": "$2b$08$CT0itmYRB8SIJxIyDf.She1qGx0kgSbQRb36tSyc99zkb5A.KkyxS"

}

### DELETE a User

**DELETE** to [https://backend-onelineaday.herokuapp.com/api/users/1]

**_*id in URL is user id_**

**Returns**: an object with a message

{

    "message": "Deleted 1 user record."

}

## POSTS ENDPOINTS

### GET all Posts/Journal Entries

**GET** to [https://backend-onelineaday.herokuapp.com/api/journal/posts]

**Returns**: an array of post objects

{

    "posts": [

        {

        "id": 1,

        "title": "today",

        "text_entry": "lorem ipsum",

        "created_at": "10-20-2019",

        "user_id": 1

        },

        {

        "id": 2,

        "title": "tomorrow",

        "text_entry": "lorem ipsum",

        "created_at": "10-20-2019",

        "user_id": 1

        },

        {

        "id": 3,

        "title": "next week",

        "text_entry": "lorem ipsum",

        "created_at": "10-20-2019",

        "user_id": 2

        },

        {

        "id": 4,

        "title": "this week",

        "text_entry": "lorem ipsum",

        "created_at": "10-20-2019",

        "user_id": 2

        },

        {

        "id": 5,

        "title": "this month",

        "text_entry": "lorem ipsum",

        "created_at": "10-20-2019",

        "user_id": 3

        }

    ]

}

### GET a User’s Posts by User Id

**GET** to [https://backend-onelineaday.herokuapp.com/api/journal/users/1/posts]

**_*id in URL is user id_**

**Returns**: an array of post objects

[

    {

    "id": 1,

    "title": "today",

    "text_entry": "my first post",

    "created_at": "10-20-2019"

    },

    {

    "id": 2,

    "title": "tomorrow",

    "text_entry": "my second post",

    "created_at": "10-20-2019"

    }

]

### GET a Post by Post Id

**GET** to [https://backend-onelineaday.herokuapp.com/api/journal/posts/1]

**_*id in URL is post id_**

**Returns**: a post object

{

    "id": 1,

    "title": "today",

    "text_entry": "my first post",

    "created_at": "10-20-2019"

}

### GET a Post by User Id & Search Query

**GET** to [https://backend-onelineaday.herokuapp.com/api/journal/users/1/search/{searchtext}]

**_*id in URL is user id_**

**Returns**: an array of post objects

[

    {

    "post_id": 11,

    "title": "halloween",

    "text_entry": "lorem ipsum",

    "created_at": "10-20-2019",

    "user_id": 6

    },
    {

    "post_id": 12,

    "title": "thanksgiving",

    "text_entry": "lorem ipsum",

    "created_at": "10-20-2019",

    "user_id": 6

    }

]


### GET a Post by User Id & Post Date

**GET** to [https://backend-onelineaday.herokuapp.com/api/journal/users/1/posts/10-21-2019]

**_*id in URL is user id_**

**_*DATE MUST BE IN THE FORMAT MM-DD-YYYY (DASHES INCLUDED)**

**_*PLEASE USE LEADING ZEROS FOR DAYS/MONTHS 1 – 9**

**Returns**: an array of post objects

[

    {

    "post_id": 11,

    "title": "halloween",

    "text_entry": "lorem ipsum",

    "created_at": "10-20-2019",

    "user_id": 6

    },

    {

    "post_id": 12,

    "title": "thanksgiving",

    "text_entry": "lorem ipsum",

    "created_at": "10-20-2019",

    "user_id": 6

    }

]

### Create a New Journal Entry/Post

**POST** to [https://backend-onelineaday.herokuapp.com/api/journal/users/1/posts]

**_*id in URL is user id_**

Takes an object:

{

    "title": "new post",

    "text_entry": "lorem ipsum lorem ipsum"

}

**Returns**: the created post object

{

    "id": 1,

    "title": "new post",

    "text_entry": "lorem ipsum lorem ipsum"

    "created_at": "10-20-2019"

}

### Update a Post

**PUT** to [https://backend-onelineaday.herokuapp.com/api/journal/posts/1]

**_*id in URL is post id_**

Takes an object:

{

    "title": "edited post",

    "text_entry": "edited lorem ipsum lorem ipsum"

}

**_*Date/created_at is not required_**

**Returns**: the updated post object

{

    "id": 1,

    "title": "edited post",

    "text_entry": "edited lorem ipsum lorem ipsum"

    "created_at": "10-20-2019"

}

### DELETE a Post

**DELETE** to [https://backend-onelineaday.herokuapp.com/api/journal/posts/1]

**_*id in URL is post id_**

**Returns**: an object with a message

{

    "message": "Deleted 1 journal post."

}
