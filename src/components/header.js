import React, { Component } from "react";
import Pdf from "../Daniel Jacques Resume.pdf"
class Header extends Component {
    render() {
        return (<header className="header">

            <h1>
                <a
                className="App-link"
                href="/"
                target="_blank"
            >
                D
          <span>aniel </span>
          J
          <span>acques </span>

            </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
                    className="App-link"
                    href="./projects"
                    target="_blank"
                    rel="noopener noreferrer"

                >
                    Projects
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
                    className="App-link"
                    href={Pdf}
                    target="_blank"
                >
                    Resume
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
                    className="App-link"
                    href={Pdf}
                    target="_blank"

                >
                    Contact me!
        </a>
            </h1>

        </header>
        );
    }
}

export default Header;