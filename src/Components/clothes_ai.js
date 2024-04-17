import React from "react" //Importing the "React" package
import './Styling/clothes_ai.css'  //Linking style sheet (signup.css) where it creates the layout of the sign up page (External CSS)


export default function AIClothes(){//Adding and exporting AIClothes Function that adds contents on AI page. When i export the function, the function can be used in all of the components
    return(
        <div className="link-container"> {/* Using <div> (diversion) tag to style the layout of AI page, with the classname of "link-container" */}
            <h1>Material AI</h1> {/* Using level 1 heading (<h1>) tag to give the heading of the page. */}
            <p style={{fontSize:36}}>By clicking on <a href="http://127.0.0.1:8000">Use AI</a>Link, you can store images of clothes and 
            get what the material is your clothes is made of. </p> {/* Using <p> tag to give instructions on using the AI. Furthermore, i have used inline css to add the font size of the text. Also i have used <a> tag with href attribute to link the "use AI" text to localhost:8000 where users can use the AI and also flask application will be runned in this server*/}

            <b>Before using the AI</b><p style={{fontSize:32}}>Please make sure to go to <b style={{color:"black"}}>Backend/AI/flask_ai/app.py</b> directory and turn on flask application </p>{/* Using <b> tag for putting the text bold and <p> tag to give reminder about the AI. Furthermore, i have used inline css to add the font size in <p> tag and color in <b> tag of the text */}

            <b>NOTE</b><p style={{fontSize:32}}>sometimes the AI will give the wrong prediction, so please ask the chatbot further question about the material.</p> {/* Using <b> tag for putting the text bold and <p> tag to give reminder about the AI. Furthermore, i have used inline css to add the font size of the text */}
        </div>//Closing the div tag (</div>
    )
}