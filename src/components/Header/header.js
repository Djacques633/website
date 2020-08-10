import React, { Component } from "react";
import Pdf from "../../resources/Daniel Jacques Resume.pdf";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="HeaderContainer">
        <ul>
          <li><a className="App-link" href="/" >
            Daniel Jacques 
          </a>
          </li>
          <li>
          <a
            className="App-link"
            href="./projects"
          >
            Projects
          </a>
          </li>
          <li>
          <a className="App-link"
             href={Pdf}
             target = "_blank" 
             rel = "noopener noreferrer">
            Resume
          </a> 
          </li>
          <li>
          <a className="App-link" href={Pdf}>
            Contact me
          </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
