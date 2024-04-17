import './Styling/home.css' //Links the home.css stylesheet (External CSS)

export default function AboutUs(){ //Adding and exporting AboutUs Function that adds contents on about us. When i export the function, the function can be used in all of the components
    return(
        <div className="about-us-container"> {/* Using <div> (diversion) tag to style the layout of contents in about us page, with the classname of "about-us-container" */}
            <h3>About CMAI</h3> {/* Using level 3 heading (<h3>) tag to give the heading of the page */}
            <p style={{fontSize: 36}}>My Name is Sulayman and i am a year 2 student, studying BCs Computer science. I am creating this website because 
                i want to help students and users who are into fashion find there materials in clothes. I want the users to save 
                less time researching and more time making. If this website blows up, i will be adding a new feature where users 
                can talk to AI chatbot so they can find out where they can purchase this material. 
            </p> {/* Using <p> tag to talk about CMAI. Furthermore, i have used inline css to add the font size of the text */}
            <br></br> {/* Using <br> for line break */}
        </div> //Closing the div tag (</div>)
    )
}