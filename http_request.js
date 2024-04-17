const http = require('http'); //Declaring a http variable to add package http 
const httpServer = http.createServer(); //Declaring a httpServer variable to create a http server
const port = 8080; //Using port 8080 to connect the http server


httpServer.on('request', (req, res) => {//Sets up a listener for respond event in http. Where a callback function is executed
    res.write('Welcome to Clothes Match AI')// Wrote a response to the server when the user enters the server
    res.end() //Ends the response
})

httpServer.on('connection', () => { //Sets up a listener for connection so when the user is connected to the server, it will display a message stating that the user has been connected
    console.log("Someone is connected to your server") //Prints the message in the console 
})

httpServer.listen(port, () => {
    console.log(`Listening on port ${port}...`) //Prints a message when the http server is running

}) //By using .listen attribute, i am starting the http server in port 8000 




