import { Link, Route, Routes } from 'react-router-dom'; //Impofrting the "react-router-dom" package with the method "Link" "Route" and "Routes"
import Logo from './Logo/logoBlack.png'; //Adding the my CMAI logo to the top navation box
import './Styling/top_nav.css'; //Linking style sheet (top_nav.css) where it creates the layout of the top navigation box (External CSS)

import HomePage from './home'  //Linking the component (home.js)
import AIClothes from './clothes_ai';  //Linking the component (clothes_ai.js)
import SignUp from './sign_up'  //Linking the component (sign_up.js.js)
import ContactPage from './contact';  //Linking the component (contact.js)


export default function TopNav({text}){ //Adding and exporting TopNav Function that adds contents on top navigation box into the web application. I am assigning the text value which is added in this component. By exporting the default function, it can be used in all of the components
    return(
        <div className="nav-container"> {/* Using <div> (diversion) tag to style the layout of top navigation box, with the classname of "nav-container" */}
            <header> {/*Using <header> tag to create a header in the website  */}
                <nav className="top-nav"> {/*Using <nav> tag to create a navigation box in the website  */}
                    <Link to="/"><img src={Logo} alt="CMAI Logo" height="90" width="86" /></Link> {/*Using <img> tag to add logo in top navigation box. I have used <Link> method in react-router-dom package to link the endpoint of "/" which locates the user to the homepage (home.js) when user clicks the logo image*/}
                    <div className="link"> {/* Using <div> (diversion) tag to style the layout of links in navigation box, with the classname of "links" */}
                        <Link to="/" className="links"> Home</Link> {/*Using <Links> method to add links in top navigation box. I have used <Link> method in react-router-dom package to link the endpoint of "/" which locates the user to the homepage (home.js) when user clicks the home link */}
                        <Link to="/materialAI" className="links">Material AI</Link> {/*Using <Links> method to add links in top navigation box. I have used <Link> method in react-router-dom package to link the endpoint of "/materialAI" which locates the user to the homepage (clothes_ai.js) when user clicks the Material AI link */}
                        <Link to="/contact" className='links'>Contact</Link> {/*Using <Link> tag  method to add links in top navigation box. I have used <Link> method in react-router-dom package to link the endpoint of "/contact" which locates the user to the homepage (contact.js) when user clicks the Contact link */}
                    </div> {/*Closing the form tag (</form>)*/}
                    <Link to="/account"><button>Sign Up</button></Link> {/*Using <Button> tag to add button in top navigation box. I have used <Link> method in react-router-dom package to link the endpoint of "/account" which locates the user to the homepage (sign_up.js) when user clicks the Sign Up button */}
                </nav> {/*Closing the nav tag (</nav>)*/}
                <Routes> {/*Creates a routes for the react to locate in*/}
                    <Route exact path="/" element={<HomePage text={text} />}></Route> {/*When reacts executes for the first time, react will bring HomePage component up. Exact path is when react checks if the matching endpoint is added in the URL. Element attribute, react brings the HomePage (home.js) component*/}
                    <Route path="/materialAi" element={<AIClothes />}></Route> {/*When user clicks in the Material AI link, react will bring AIClothes component up. Exact path is when react checks if the matching endpoint is added in the URL. Element attribute, react brings the AIClothes (clothes_ai.js) component*/}
                    <Route path="/account" element={<SignUp />}></Route> {/*When user clicks in the Sign Up button, react will bring SignUp component up. Exact path is when react checks if the matching endpoint is added in the URL. Element attribute, react brings the SignUp (sign_up.js) component*/}
                    <Route path="/contact" element={<ContactPage Email="CMAI123@gmail.com" PhoneNumber="073681048080" />}></Route> {/*When user clicks in the Contact link, react will bring ContactPage component up. Exact path is when react checks if the matching endpoint is added in the URL. Element attribute, react brings the HomePage component*/}
                </Routes>
            </header> {/*Closing the header tag (</header>)*/}
        </div> //Closing the div tag (</div)
    )
}