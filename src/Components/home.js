import CMAIInfo from './cmai_info' //Importing the component "CMAIInfo" from the document cmai_info.js
import AboutUs from './about_us' //Importing the component "AboutUs" from the document about_us.js
import Banner from './Home_img/cmai_banner.jpg' //Importing the CMAI banner by the following directory
import './Styling/home.css' //Links the home.css stylesheet (External CSS)



export default function HomePage({text}){ //Adding and exporting HomePage Function that adds contents on homepage.I am assigning the text value which is added in this component. When i export the function, the function can be used in all of the components
    return(
        <div className="home-container"> {/* Using <div> (diversion) tag to style the layout of homepage, with the classname of "home-container" */}
            {text} {/*By using the (text) value which is found in the useState in app.js, when the user enters the website, it will print a console log in browser, welcoming the user */}
            <img className='banner' src={Banner} alt='CMAI Banner' /> {/*Using <img> tag, to insert CMAI Banner, where it refers from  the name of the directory. */}
            <div className="cmai-info-container"> {/* Using <div> (diversion) tag to add row which collects the contact data in the homepage, with the classname of "cmai-info-container" */}
                <CMAIInfo /> {/*Adding the clothes_info.js component in the home page */}
            </div>{/*Closing the div tag */}

            <div className="about-us-container"> {/* Using <div> (diversion) tag to style the layout of about us section, with the classname of "about-us-container" */}
                <AboutUs /> {/*Adding the about_us.js component in the home page */}
            </div> {/*Closing the div tag */}
        </div> //Closing the div tag 
    )
}