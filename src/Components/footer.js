import React from 'react' //Importing the "React" package
import YellowLogo from './Logo/logo.png'; //Importing the CMAI logo by the following directory
import { Link } from 'react-router-dom'; //Impofrting the "react-router-dom" package with the method "Link"

import './Styling/footer.css' //Links the footer.css stylesheet (External CSS)
export default function Footer(props){ //Adding and exporting Footer Function that adds contents on footer. When i export the function, the function can be used in all of the components
    return(
        <footer> {/*Using <footer> tag to create a footer in the website  */}
            <img src={YellowLogo} alt='CMAI Yellow Colour' height='50' width='50' /><br></br> {/*Using <img> tag, to insert CMAI logo, where it refers from  the name of the directory. Also used <br> tag to line break the element */}
            <div className='footer-container'> {/* Using <div> (diversion) tag to style the layout of footer box, with the classname of "footer-container" */}
                <div className='contact-container'> {/* Using <div> (diversion) tag to add row which collects the contact data in the footer, with the classname of "contact-container" */}
                    <h3>Contact</h3> {/* Using level 3 heading (<h3>) tag to give the heading of the page */}
                    <p style={{color:'white', fontSize:15}}>Email: {props.Email}</p> {/* Using <p> tag to give content in contact details. Add the prop name Email which is added in root component. I have used inline css to style the font size and colour of text */}
                    <p style={{color:'white', fontSize:15}}>Phone Number: {props.PhoneNumber}</p> {/* Using <p> tag to give content in contact details. Add the prop name PhoneNumber which is added in root component. I have used inline css to style the font size and colour of text */}
                </div>{/*Closing the div tag */}
                <div className='quick-links-container'> {/* Using <div> (diversion) tag to add row which collects the quick links data in the footer, with the classname of "quick-link-container" */}
                    <h3>Quick Links</h3> {/* Using level 3 heading (<h3>) tag to give the heading of the page */}
                    <Link to="/" ><li>Home</li></Link> {/*Using <li> tag to add links in footer. I have used <Link> method in react-router-dom package to link the endpoint of "/" which locates the user to the homepage (home.js) when user clicks the home link */}
                    <Link to="/contact"><li>Contact Us</li></Link> {/*Using <li> tag to add links in footer. I have used <Link> method in react-router-dom package to link the endpoint of "/contact" which locates the user to the contasct page (contact.js) when user clicks the home link */}
                </div> {/*Closing the div tag */}
            </div> {/*Closing the div tag */}
            <div className='ending'> {/* Using <div> (diversion) tag to style the layout of @copyright box, with the classname of "ending" */}
                <b><p>&copy; 2024 Copyrigt All Reserved. Clothes Material AI</p></b> {/*Using <b> and <p> tag to add the copyright reservation at the end of the footer. I have used &copy i am adding "@" */}
            </div> {/*Closing the div tag */}
        </footer> //Closing the footer tag
    )
}