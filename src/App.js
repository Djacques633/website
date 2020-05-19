import React from 'react';
import logo from './logo.svg';
import './App.css';
import gif from "./banner2.gif";
import Pdf from "./Daniel Jacques Resume.pdf";
// import image from "./lp_image.jpg"


export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function Body() {
  return (
    <h2>
      <div id = "banner">
      <img src= {gif} id = 'img'></img>     </div>
  <div>
    Hello! My name is Daniel Jacques, and I am a Computer Science student at Ohio University.<br>
    </br>Here, I store a list of my projects, technologies, and interests in hopes that they can <br>
    </br>provide a sense for who I am as a student, as well as a potential employee. Please feel <br>
    </br>free to contact me with any questions.
  </div>
  </h2>)
}

export function Header() {
  return (<div>
      <header className="header">
        <h1>D
          <span>aniel </span>
          J
          <span>acques </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className = "App-link"
          href = "./projects.html"
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
    </div>);
}

export default App;
