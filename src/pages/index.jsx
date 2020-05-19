import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import gif from "../banner2.gif";
import Pdf from "../Daniel Jacques Resume.pdf";
import Header from "../components/header";
// import image from "./lp_image.jpg"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

export const MainPage = () => {
  return (<>
    <Header></Header>
    <h2>
      <div id="banner">
        <img src={gif} id='img'></img>     </div>
           Hi I am a Computer Science student at Ohio University set to graduate in the Spring of 2021.<br>
      </br>Here, I store a list of my projects, technologies, and interests in hopes that they can <br>
      </br>provide a sense for who I am as a student, as well as a potential employee. Please feel <br>
      </br>free to contact me with any questions.
  </h2>
  </>
  );

}

export default MainPage;