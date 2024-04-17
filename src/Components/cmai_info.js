import './Styling/home.css' //Links the home.css stylesheet (External CSS)
export default function CMAIInfo(){ //Adding and exporting CMAIInfo Function that adds contents on information about CMAI. When i export the function, the function can be used in all of the components
    return(
        <div className="info-container"> {/* Using <div> (diversion) tag to style the layout of contents in info on CMAI, with the classname of "info-container" */}
            <div className='info-row'> {/* Using <div> (diversion) tag to style the layout of information box in rows, with the classname of "info-row" */}
                <h3>What is Clothes Material AI</h3> {/* Using level 3 heading (<h3>) tag to give the heading of the page */}
                <p style={{fontSize: 30}}>Clothes Material AI is a clothing based AI which scans your clothes and gives it's material. Instead of doing really long research on what you
                        material your clothes are made of, you can use our amazing AI feature which will give you the material quickly. It is really easy to use, insert image of your clothes 
                        and let the AI do the rest.
                    </p> {/* Using <p> tag to give information about CMAI. Furthermore, i have used inline css to add the font size of the text */}
            </div>
            <div className='info-row'> {/* Using <div> (diversion) tag to style the layout of information box in rows, with the classname of "info-row" */}
                <h3>Who can use Clothes Material AI</h3> {/* Using level 3 heading (<h3>) tag to give the heading of the page */}
                <p style= {{fontSize: 30, }}>Are you studying fashion course? Or are you are obsessed with your clothes material and want to see what material is your
                    clothes?CMAI is a tool to use, since it saves time on researching clothes materails. Every one  who really likes clothes and want to make their own 
                    clothes in the future, CMAI is the tool to use. Everone is welcome in using CMAI.
                    </p> {/* Using <p> tag to give information about CMAI. Furthermore, i have used inline css to add the font size of the text */}
            </div> {/*Closing the div tag (</div>*/}
        </div> //Closing the div tag (</div>)
    )
}

