import React from "react"; //Imports all the export in the react package
import { useState } from "react"; //Using useState package to pass the value of username and password to the backend
import './Styling/sign_up.css' //Links the login.css stylesheet (External CSS)
import Login from "./log_in"; //Importing the component "Login" from the document log_in.js
import axios from "axios"; //Using axios package to respond to the backend or third party request
import { useNavigate } from "react-router"; //Impofrting the "react-router-dom" package with the method "useNavigation"

export default function SignUp(){ //Adding and exporting Signup Function that adds contents on user interaction by signing up into the web application. By exporting the default function, it can be used in all of the components
    const navigate = useNavigate() //Declaring a const variable "navigate" which defines a function useNavigate() to navigate the user when they have logged in the system
    const [username, setUsername] = useState("") //Using useState to pass the value called username to the backend (node.js)
    const [email, setEmail] = useState("") //Using useState to pass the value called email to the backend (node.js)
    const [password, setPassword] = useState("") //Using useState to pass the value called password to the backend (node.js)
    function handleSubmittion(event){ //Creating a handle function where this function will be triggered when user presses "Submit" button. Event attribute is added so it can track the user input and by using event, i will prevent the page to go into different page until the user inserts the data. 
        event.preventDefault(); //Will stop the browser from running 
        axios.post('http://localhost:8000/signup', {username, email, password}) //Uses axios package to respond to the backend by giving the values of user input for username and password
        .then(res => {
            alert(`Welcome ${username} to CMAI`) //Using alert to do pop up messaging, welcoming the user
            navigate("/") //Navigates the user to the home page by adding the endpoint of "/"
            console.log(res) //Prints response in json format
        }) 
        .catch(err => console.log(err)) //Using .catch promise chain to print the error message into the console browser
       
    }
    return(
        <div className="sign-up-container"> {/* Using <div> (diversion) tag to style the layout of signup page, with the classname of "sign-up-container" */}
            <form onSubmit={handleSubmittion}> {/* Use <form> tag to create a form where user can insert the sign up details. By adding "onSubmit" it will send the form to the backend, which triggers the "HandleSubmittion" */}
                <h1>Sign Up</h1> {/* Using level 1 heading (<h1>) tag to give the heading of the page.  */}
                <div className="sign-up-detail-box"> {/* Using <div> (diversion) tag to style the layout of login box, with the classname of "sign-up-detail-container" */}
                    <label>UserName</label> {/* Using <label> tag to add the label in Username input box.  */}
                    <input className="form" type="text" id="username" placeholder="Enter UserName" required onChange={e => setUsername(e.target.value)}></input> {/* Using <input> tag to add input box for user interaction. Setting the type text so users can write text in the box,I am using onChange attribute, where i refer to "setUsername" value in useState hook when the user enters username  */}
                    <label>Email</label> {/* Using <label> tag to add the label in Email input box.  */}
                    <input className="form" type="text" id="email" placeholder="Enter Email" required onChange={e => setEmail(e.target.value)}></input> {/* Using <input> tag to add input box for user interaction. Setting the type text so users can write text in the box,I am using onChange attribute, where i refer to "setEmail" value in useState hook when the user enters email  */}
                    <label>PassWord</label> {/* Using <label> tag to add the label in Password input box.  */}
                    <input className="form" type="password" id="password" placeholder="Enter Password" required onChange={e => setPassword(e.target.value)}></input> {/* Using <input> tag to add input box for user interaction. Setting the type text so users can write text in the box,I am using onChange attribute, where i refer to "setPassword" value in useState hook when the user enters password  */}
                    <button type="submit" className="create-btn">Create</button> {/*Using <button> tag to send the form to the backend (node.js)  */}

                    <hr></hr> {/*Using hr tag (<hr>) to add line in the signpage where login component will be added */}
                    <p>OR</p> {/*Using p tag (<p>) to add text suggesting user alternative which is to login to the system */}
                </div> {/*Closing the div tag (</div>)*/}
            </form> {/*Closing the form tag (</form>)*/}
            <Login /> {/**Adding Login component to the sign up page*/}
        </div> //Closing the div tag (</div>)
    )
}
