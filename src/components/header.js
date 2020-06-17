import React, { Component } from "react";
import Pdf from "../resources/Daniel Jacques Resume.pdf";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>
          <a className="App-link" href="/" >
            Daniel Jacques 
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="App-link"
            href="./projects"
          >
            Projects
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="App-link"
             href={Pdf}
             target = "_blank" 
             rel = "noopener noreferrer">
            Resume
          </a> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="App-link" href={Pdf}>
            Contact me
          </a>
        </h1>
      </header>
    );
  }
}

export default Header;
