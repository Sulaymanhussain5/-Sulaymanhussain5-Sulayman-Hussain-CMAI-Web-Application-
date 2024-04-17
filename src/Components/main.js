import * as React from "react"; //Imports all the export in the react package
import * as ReactDOM from "react-dom/client"; //Imports all the export in the react-router-dom package
import { //Creating a browser router to add a router which allows the router to route to different page when links are pressed.
  createBrowserRouter,//Creates a browser router
  RouterProvider, //It wraps the application in routing, which means that it creates a router to add all the compoents 
} from "react-router-dom"; //Adding a react-router-dom package 

import "./index.css"; //Links the footer.css stylesheet (External CSS)
import ContactPage from "./contact"; //Importing the component "ContactPage" from the document contact.js
import HomePage from "./home"; //Importing the component "HomePage" from the document home.js
import Login from './log_in'; //Importing the component "Login" from the document log_in.js
import AIClothes from "./clothes_ai";

const router = createBrowserRouter([ //Creating a variable that creates a browser router
  {
    path: "/", //By using "path" attribute, i am adding the endpoint of the homepage
    element: <HomePage /> //By using "element" attribute, i am telling the react to bring "HomePage" component up 
  },
  {
    path: "/materialAI", //By using "path" attribute, i am adding the endpoint of the Material AI page
    element: <AIClothes /> //By using "element" attribute, i am telling the react to bring "AIClothes" component up 
  },
  {
    path: "/contact", //By using "path" attribute, i am adding the endpoint of the contact us page
    element: <ContactPage />, //By using "element" attribute, i am telling the react to bring "ContactPage" component up 
  },
  {
    path: "/login", //By using "path" attribute, i am adding the endpoint of the login page
    element: <Login />, //By using "element" attribute, i am telling the react to bring "Login" component up 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render( //Renders the react application into HTML 
  <React.StrictMode> {/*By using <React.StrictMode> tag, react will identify errors when the application is being runned*/}
    <RouterProvider router={router} /> {/*By using <RouterProvider> tag, i am wrapping all of the router varable to create a router that react will use when application is being runned*/}
  </React.StrictMode> /*Closing the React.StrictMode tag */
);