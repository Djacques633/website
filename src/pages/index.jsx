import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import gif from "../banner2.gif";
import Pdf from "../Daniel Jacques Resume.pdf";
// import image from "./lp_image.jpg"
import { BrowserRouter as Router,Route, Switch,Link,Redirect } from "react-router-dom";

export const MainPage = () => {
  return (<>
      <header className="header">
        <h1>D
          <span>aniel </span>
          J
          <span>acques </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className = "App-link"
          href="./projects.html"
          target = "_blank"
          rel="noopener noreferrer"

          >
            Projects
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className = "App-link"
          href = {Pdf}
          target = "_blank" 

          >
            Resume
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className = "App-link"
          href = {Pdf}
          target = "_blank" 

          >
            Contact me!
        </a>
        </h1>

      </header>
    <h2>
    <div id = "banner">
    <img src= {gif} id = 'img'></img>     </div>
  Hello! My name is Daniel Jacques, and I am a Computer Science student at Ohio University.<br>
  </br>Here, I store a list of my projects, technologies, and interests in hopes that they can <br>
  </br>provide a sense for who I am as a student, as well as a potential employee. Please feel <br>
  </br>free to contact me with any questions.
</h2>
</>
);

}

export default MainPage;