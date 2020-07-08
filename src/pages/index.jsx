import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Particles from "react-particles-js";
import config from "./index.json";
import s from './index.css';
import image from "../resources/portfoliopic.jpg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const TECHNOLOGIES = [
  `HTML`,
  `CSS`,
  `React`,
  `NodeJS/Typescript`,
  `AWS`,
  `Kubernetes`,
  `C`,
  `Python`,
  `Github`,
  `Microcontrollers`
]

export const MainPage = () => {
  return (
    <>
      <Header/>
      <Particles params = {config} id = "canvas"></Particles>
      <img class = "pic" src = {image} alt = "Me"></img>
      <h1>
        About me
      </h1>
      <h3>
        <p>
          Hi there! I am a Computer Science student at Ohio University graduating
          in the Spring of 2021.
        </p>
        <p>
          Here, I hopes that I can provide a sense for who I am as a student, as well
          as a potential employee by highlighting my experience in the software field. Please feel free to contact me with any
          questions.
        </p>
      </h3>
      <h1>
        What I've done
      </h1>
      <h3>
        Nationwide Intern through Innosource - 
      </h3>
      <h3>
        Ohio University Information Technologies Student Software Engineer - 
      </h3>
      <h3>Revolution UC Hackathon (2nd place) - </h3>
      <h3>
        Ohio University College of Osteopathic Medicine CS Student - 
      </h3>
      <h3>
        Air Force Institute of Technology Human Systems Integration Lab Intern - 
      </h3>
      <h1>
        Technologies & Tools
      </h1>
      <div class="technologies">
        {TECHNOLOGIES.map((technology, i) =>
            <div
                key={i}
                class="technology"
            >
                <div>
                    <div class={s.language}>{technology}</div>
                </div>
            </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
