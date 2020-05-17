import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pdf from "./Daniel Jacques Resume.pdf"
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
  <div>
    Hello! My name is Daniel Jacques, and I am a Computer Science student at Ohio University.
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
          href = "https://google.com"
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
