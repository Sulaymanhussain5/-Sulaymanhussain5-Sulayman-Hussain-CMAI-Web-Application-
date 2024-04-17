import { useState } from 'react'; //Using useState package to pass the value of username and password to the backend
import {useNavigate} from 'react-router-dom' //Impofrting the "react-router-dom" package with the method "useNavigation"
import axios from 'axios' //Using axios package to respond to the backend or third party request
import './Styling/login.css' //Links the login.css stylesheet (External CSS)

export default function Login(){ //Adding and exporting Login Function that adds contents on user interaction by logging into the web application. By exporting the default function, it can be used in all of the components
    const navigate = useNavigate(); //Declaring a const variable "navigate" which defines a function useNavigate() to navigate the user when they have logged in the system
    const [username, setUsername] = useState("") //Using useState to pass the value called username to the backend (node.js)
    const [password, setPassword] = useState("") //Using useState to pass the value called password to the backend (node.js)
    function handleSubmittion(event){ //Creating a handle function where this function will be triggered when user presses "Submit" button. Event attribute is added so it can track the user input and by using event, i will prevent the page to go into different page until the user inserts the data. 
        event.preventDefault(); //Will stop the browser from running 
        axios.post('http://localhost:8000/login', {username:username, password:password}) //Uses axios package to respond to the backend by giving the values of user input for username and password
        .then(res => {
            if(res.data.Status==="LOGGED_IN"){
                alert("Welcome back") //Using alert to do pop up messaging, welcoming the user
                navigate("/") //Navigates the user to the home page by adding the endpoint of "/"
                console.log(res)
            } else {
                alert("Invalid Username or Password")
            }
            
        }) //Using .then promise chain to print the response messsage into the console browser
        .catch(err => console.log(err)) //Using .then promise chain to print the error message into the console browser
        
    }
    return(
        <div className="login-container"> {/* Using <div> (diversion) tag to style the layout of login page, with the classname of "login-container" */}
            <form onSubmit={handleSubmittion}> {/* Use <form> tag to create a form where user can insert the login details. By adding "onSubmit" it will send the form to the backend, which triggers the "HandleSubmittion" */}
                <h1 style={{color: '#3d3838'}}>Login</h1> {/* Using level 1 heading (<h1>) tag to give the heading of the page. I have used inline css to give the colour of the heading grey */}
                <div className="login-details"> {/* Using <div> (diversion) tag to style the layout of login box, with the classname of "login-container" */}
                    <label>UserName</label> {/* Using <label> tag to add the label in Username input box.  */}
                    <input className="form" type="text" placeholder="Enter UserName" onChange={e => setUsername(e.target.value)}></input> {/* Using <input> tag to add input box for user interaction. Setting the type text so users can write text in the box,I am using onChange attribute, where i refer to "setUsername" value in useState hook when the user enters username  */}
                    <label>PassWord</label> {/* Using <label> tag to add the label in Password input box.  */}
                    <input  className="form" type="password" placeholder="Enter PassWord" onChange={e => setPassword(e.target.value)}></input> {/* Using <input> tag to add input box for user interaction. Setting the type text so users can write text in the box,I am using onChange attribute, where i refer to "setPassword" value in useState hook when the user enters password  */}
                    <button className="login-btn">LOGIN</button> {/*Using <button> tag to send the form to the backend (node.js)  */}
                </div> {/*Closing the div tag (</div>)*/}
            </form> {/*Closing the form tag (</form>)*/}
        </div> //Closing the div tag (</div>)
    )
}