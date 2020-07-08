import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
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
        </h1>
      </footer>
        );
    }
}