import React, { Component } from "react";
import Pdf from "../../resources/Daniel Jacques Resume.pdf";
import { HeaderContainer, Link } from "./header.style";
import "./header.css";

class Header extends Component {
  options = [{
    text: "Daniel Jacques",
    redirect: "/",
    target: "",
    rel:""
  },
  {
    text: "Projects",
    redirect: "./projects",
    target: "",
    rel:""
  },
  {
    text: "Resume",
    redirect: Pdf,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    text: "Contact me",
    href: "./projects",
    target: "",
    rel: ""
  }
  ];
  render() {
    return (
      <HeaderContainer>
        {this.options.map((each) => {
          return(
          <Link href={each.redirect} target={each.target} rel={each.rel}>
            {each.text}
          </Link>)
        })}
      </HeaderContainer>
    );
  }
}

export default Header;
