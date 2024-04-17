import './Styling/contact.css' //Links the contact.css stylesheet (External CSS)
import { useState } from 'react' //Using useState package to pass the value of full_name and comment to the backend
import {useNavigate} from 'react-router-dom' //Impofrting the "react-router-dom" package with the method "useNavigation"
import axios from 'axios'; //Using axios package to respond to the backend or third party request


export default function ContactPage(props){ //Adding and exporting ContactPage Function that adds contents on user interaction by commenting or giving feedback about the website. I have added "props"(properties) attribute, so it collects the data in root component (app.js) and add it to this function where it will be used in the content. By exporting the default function, it can be used in all of the components
    const navigate = useNavigate(); //Declaring a const variable "navigate" which defines a function useNavigate() to navigate the user when they have logged in the system
    const [full_name, setFull_name] = useState("") //Using useState to pass the value called full_name to the backend (node.js)
    const [comment, setComment] = useState("") //Using useState to pass the value called comment to the backend (node.js)
    function HandleSubmittion(event){ //Creating a handle function where this function will be triggered when user presses "Submit" button. Event attribute is added so it can track the user input and by using event, i will prevent the page to go into different page until the user inserts the data. 
        event.preventDefault()//Will stop the browser from running 
        axios.post('http://localhost:8000/contact', {full_name, comment}) //Uses axios package to respond to the backend by giving the values of user input for full_name and comment
        .then(res => console.log(res)) //Using .then promise chain to print the response messsage into the console browser
        .then(err => console.log(err)) //Using .then promise chain to print the error message into the console browser
        alert("We have your feedback") //Pop up message, letting the user know that comment has been added in the database
        navigate("/")
    }
    return(
        <div className="contact-container"> {/* Using <div> (diversion) tag to style the layout of contact us page, with the classname of "contatc-container" */}
            <form onSubmit={HandleSubmittion}> {/* Use <form> tag to create a form where user can insert the contact details. By adding "onSubmit" it will send the form to the backend, which triggers the "HandleSubmittion" */}
                <h1>Contact</h1> {/* Using level 1 heading (<h1>) tag to give the heading of the page */}
                <p style={{fontSize:36}}>Please use the form bellow to send your enquries about the CMAI website. Also leave your feedback on the website
                    where the webiste will be improved based on your feedback.
                </p> {/* Using <p> tag to give information about CMAI. */}
                <h3>Contact us on:</h3> {/* Using level 3 heading (<h3>) tag to give the heading of the page */}
                <li>Phone: {props.PhoneNumber}</li> {/* Using <li> tag to give content in contact details. Add the prop name PhoneNumber which is added in root component */}
                <li>Email: {props.Email}</li> {/* Using <li> tag to give content in contact details. Add the prop name Email which is added in root component */}
                <div className="contact-detail-box"> {/* Using <div> (diversion) tag to style the layout of contact us page, with the classname of "contatc-details-container" */}
                    <label>Full Name</label> {/* Using <label> tag to add the label in Full name input box.  */}
                    <input className="form"  type='text' id="full_name"placeholder='Enter Full Name' onChange={e => setFull_name(e.target.value)} required></input> {/* Using <input> tag to add input box for user interaction. Setting the type text so users can write text in the box, i am refering full_name as id,I am using onChange attribute, where i refer to "setFull_name" value in useState hook when the user enters full name  */}
                    <label >Comment</label> {/* Using <label> tag to add the label in Comment input box.  */}
                    <input className="form"  type='text' id="comment"placeholder='Enter Comment' onChange={e => setComment(e.target.value)} required></input> {/* Using <input> tag to add input box for user interaction. Setting the type text so users can write text in the box, i am refering comment as id,I am using onChange attribute, where i refer to "setComment" value in useState hook when the user enters full name  */}
                    <button type="submit">Send</button> {/*Using <button> tag to send the form to the backend (node.js)  */}
                </div> {/*Closing the div tag (</div>)*/}
            </form> {/*Closing the form tag (</form>)*/}
        </div> //Closing the div tag (</div>)
    )
}