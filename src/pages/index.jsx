import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import gif from "../banner2.gif";
import Pdf from "../Daniel Jacques Resume.pdf";
import Header from "../components/header";
import Particles from "react-particles-js"
// import image from "./lp_image.jpg"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

export const MainPage = () => {
  return (<>
    <Header></Header>
      <Particles id = 'banner'
        params={{
          "absorbers": [],
          "background": {
            "color": {
              "value": "#rgb(67,65,67)"
            },
            "size": "full",
          },
          "backgroundMask": {
            "cover": {
              "color": {
                "value": "#ffff"
              },
              "opacity": 1
            },
            "enable": false
          },
          "detectRetina": true,
          "fpsLimit": 200,
          
          "particles": {
            "collisions": {
              "enable": false,
            },
            "color": {
              "value": "#012506"
            },
            "lineLinked": {
              "enable": false,
            },
            "move": {
              "speed": 8,
            },
            "number": {
              "limit": 0,
              "value": 10
            },
            "opacity": {
              "animation": {
                "enable": false,
              },
              "random": {
                "enable": true,
                "minimumValue": 0.3
              },
              "value": 0.5
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": .25,
                "sync": false
              },
              "random": false,
            },
            "shadow": {
              "enable": false,
            },
            "shape": {
              "type": "polygon"
            },
            "size": {
              "random": {
                "enable": true,
                "minimumValue": 100
              },
              "value": 160
            },
            "stroke": {
              "color": {
                "value": "#000"
              },
              "width": 0,
              "opacity": 1
            },

          },

        }} 
      ></Particles> 
    <h2 id = 'about'>
   
           Hi! I am a Computer Science student at Ohio University set to graduate in the Spring of 2021.<br>
      </br>Here, I store a list of my projects, technologies, and interests in hopes that they can <br>
      </br>provide a sense for who I am as a student, as well as a potential employee. Please feel <br>
      </br>free to contact me with any questions.
  </h2>
  </>
  );

}

export default MainPage;