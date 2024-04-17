//-------------------------USING REQUIRE TO ADD PACAGES AND DECLARING VARIABLES -------------------------------------------------
const express = require('express'); //Adding new express in the server
const app = express() //Creating a expression function where it will deal with requests 
const port = 8000; //Defining the variable (port) which adds the port number
const cors = require('cors') //Adding cors  (Cross Origin Resource Sharing) package and it is  
const mysql2 = require('mysql2'); //Adding mysql2 package which deals with database (adding login, sigup and contact details to the database in Xammp)



app.use(express.json()) //Using .use to use the to input the middleware (express.json) in every request that is made

app.use(cors({ //Using .use to add the cors to the localhost 3000 (my front end server number) where it will get response to this server
    origin: ['http://localhost:3000'], //Using Origin to detect the request in the server. Localhost 3000 is my front end server and expect to get request in this server
    methods: ["POST", "GET"], //Using methods to only use POST and GET in localhost 3000 server
    credentials: true //Using credetials to allow authorisation. By setting the credentials to true it will give the authorisation to the front end (when user login) (can also be used for cookies) 
}));



app.post('/', (req,res) => { //Using the .post method to post json message in console browser 
    res.json({Message:"Welcome to CMAI"}) //Prints out a message  json error in the console browser which states "Welcome to CMAI"
})


//--------------------------------------CONNECTING TO DATABASE USING POOL------------------------------------------------------
const db = mysql2.createConnection({//By using createConnection  or Pool, i am connecting my database to the server, which is located in the xampp server
    host: 'localhost', //Adding a host name for xampp server (localhost)
    user: 'root', //Adding username for x ampp server (root)
    password:'', //Adding password for xampp server ('')
    database:'users' //Name of the database which is located in the xampp server (user)
})
//--------------------------------------------------------------------------------------------------------------------------------

let users = [ //Using the let variable to add users that has signed up into the system. I am using dictionary listing to add the users sign up detail
    {
        username: "Sulayman123", //Key and value of users username
        email: "sulaymanhussain1@gmail.com", //Key and value of users email
        password:"Sulayman123" //Key and value of users password
    },
    {
        username: "Sulaymanhussain1", //Key and value of users username
        email: "sulaymanhussain123@gmail.com", //Key and value of users email
        password:"Romanempire3." //Key and value of users password
    },
]

app.use(express.json()) //Using .use to use the to input the middleware (express.json) in every request that is made
app.use(cors({ //Using .use to add the cors to the localhost 3000 (my front end server number) where it will get response to this server
    origin: ['http://localhost:3000'], //Using Origin to detect the request in the server. Localhost 3000 is my front end server and expect to get request in this server
    methods: ["POST", "GET"], //Using methods to only use POST and GET in localhost 3000 server
    credentials: true //Using credetials to allow authorisation. By setting the credentials to true it will give the authorisation to the front end (when user login) (can also be used for cookies) 
}));

//------------------------------------------LINKING USER INPUTS TO THE DATABASE -------------------------------------------------



app.get('/users', (req,res) => { //Using the .get method to get the created user list 
    res.json(users) //Printing the user list by using json
})

app.get('/users/:username', (req, res) => { //Using the .get method to track if the user is in the list by writing users username
    const {username} = req.params; //By using req.params, i am declaring a const variable to get the username from the users list
    const user = users.find((user) => user.username === username); //I am declaring a const variable to find the username in the users list
    if (user){ //If the username has been found then it will print the json by showing the specified username
        res.json(user) //Prints the username
    } else { //However, if it find it then it will print a error stating that they cannot find the user
        res.status(404).json({Error: "We cannot find this user!!"}); //Prints the error with 404 error
    }
  });



app.post('/signup', (req, res) => { //Using .post to add the signup details into the database
    const sql = "INSERT INTO register (`username`, `email`, `password`) VALUES (?)"; //Using INSERT INTO to insert the user input in the table called "register" in the coloumn of "username", "email" and "password". It uses VALUE(?) to use this value in the future
    const sql2 = "INSERT INTO login (`username`, `password`) VALUES (?)"; //Using INSERT INTO to insert the user input in the table called "register" in the coloumn of "username", "email" and "password". It uses VALUE(?) to use this value in the future

        const values1 = [ //Declaring a values variable to request user input in the front end (signup.js)
            req.body.username, //Requesting a data in the front end for username
            req.body.email, //Requesting a data in the front end for email
            req.body.password //Requesting a data in the front end for password
        ]

        const values2 = [ //Declaring a values variable to request user input in the front end (signup.js)
            req.body.username, //Requesting a data in the front end for username
            req.body.password //Requesting a data in the front end for password
        ]

        db.query(sql, [values1], (err, result) => { //Callback function on adding a message when the user inputs the data into signup page
            if (err) return res.json({Error: "Fail to insert data in the server"}) //Prints out a message error in the console browser which states "Fail to insert data in the server"
            return res.json({Status: "Success"}) //Prints out a message status in the console browser which states "Success"
        })
        db.query(sql2, [values2], (err, result) => { //Callback function on adding a message when the user inputs the data into login page
            if (err) return res.json({Error: "Fail to insert data in the server"}) //Prints out a message error in the console browser which states "Fail to insert data in the server"
            return res.json({Status: "Success"}) //Prints out a message status in the console browser which states "Success"
        })
    })


app.post('/login', (req, res) => { //Using .post to look for login details in the database when the user logs in
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?"; //Declaring const variable to select the login table and check if the username and password has value added "?"
    db.query(sql, [req.body.username, req.body.password], (err, result) => {  //Callback function on adding a message when the user inputs the data into signup page
        if (err) return res.json({ Error: "Fail to login" }); //Prints out a message error in the console browser which states "Fail to insert data in the server"
      
        if (result.length < 1) { //Using if condition to check if the data is empty in rows, if the it is then it will give an json message stating that it is an error
            return res.json({ Status: "ERROR" }); //Prints out a message status in the console browser which states "ERROR"
        }
      
      
        if (result) { //Using if condition to check if the data is in the database, if yes, then it will give a json message stating that user has logged in
            return res.json({ Status: "LOGGED_IN" }); //Prints out a message status in the console browser which states "LOGGED_IN"
        } else { //Alternatively it will print an error if none of the criteria has been met
            return res.json({ Status: "ERROR" }); //Prints out a message status in the console browser which states "ERROR"
        }
        });
    });


app.post('/contact', (req,res) => { //Using .post to add the user comment in the contact page to the database 
    const sql = "INSERT INTO  contact (`Full_Name`, `comment`) VALUES(?)"; //Using INSERT INTO to insert the user input in the table called "contact" in the coloumn of "Full_Name" and "Comment". It uses VALUE(?) to use this value in the future
    const values = [ //Declaring a values variable to request user input in the front end (contact.js)
        req.body.full_name, //Requesting a data in the front end for full_name
        req.body.comment //Requesting a data in the front end for comment
    ]
    db.query(sql, [values], ( result) => { //Callback function on adding a message when the user inputs the data into contact page
        return res.json({Status: "Success"}) //Prints out a message status in the console browser which states "Success"
    })
})


        
    



//------------------------------------------------------------------------------------------------------------------------------------------------


app.listen(port, () => { //Server listening to the port, when server is runned.
    console.log(`Server is now running in port: ${port}`); //Displays the message when server gets the port
});



