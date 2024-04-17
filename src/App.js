import './App.css'; //Linking style sheet (app.css) 
import TopNav from './Components/top_nav'; //Linking the component (top_nav.js)
import Footer from './Components/footer'; //Linking the component (footer.js)
import React from 'react'; //Importing the "React" package
import { useEffect, useState } from 'react'; //Using useState package to pass the value of text which shows the user has accessed to the server of localhost:8000. And by using useEffect, it will check the backend of API to see if the endpoint is in the node.js (localhost:8000)
import axios from 'axios'; //Using axios package to respond to the backend or third party request



 function App() { //Creates a root function called App
  const [text, setText] = useState("") //Using useState to pass the value called text to the backend (node.js)
  useEffect(() => { //Using the useEffect to check the API in the backend
    axios.post('http://localhost:8000') //Uses axios package to respond to the backend (when the user enters the webiste it will print a console messgae in browser welcoming the user)
        .then(res => console.log(res))//Using .then promise chain to print the response messsage into the console browser
        .then((data) => { //Using .then promise chain to get the data from the localhost:8000
          setText(data) //Using .then promise chain to print the value of data in the setText
        })
        .then(err => console.log(err))//Using .then promise chain to print the error message into the console browser
  })

  return (
    <div className="App"> {/* Using <div> (diversion) tag to style the layout of web application, with the classname of "App" */}
        <TopNav text={text} Email="CMAI123@gmail.com" PhoneNumber="073681048080"/> {/*Adding the TopNav component in root component, where it passes the props (text) which is assigned to the useState value {text} */}
        <Footer Email="CMAI123@gmail.com" PhoneNumber="073681048080"/> {/*Adding the Footer component in root component, and passing the attribute "Email" and "PhoneNumber" to the footer component*/}
    </div> //Closing the div tag 
  );
}




export default App; //Exporting the function App 
