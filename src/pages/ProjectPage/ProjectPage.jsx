import React, { Component } from "react";
import Header from "../../components/Header/header.jsx";
import "./ProjectPage.css";
import Footer from "../../components/Footer/footer";
import Projects from "../../components/Projects/Projects";
export default class ProjectPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div style={{ margin: 40 + "px" }}>
          <Header />
          <h1 style={{ marginTop: 100 + "px" }}>Overview</h1>
          <h3 class="overview">
            I have been fortunate through my career thus far to have an
            overwhelming amount of exposure to a wide variety of projects. These
            projects stem across multiple field such as research and software
            engineering/design.
          </h3>
          <h1>Projects (Click to view pictures)</h1>
          <Projects></Projects>
          <h2>View my resume for more!</h2>
        </div>

        <Footer></Footer>
      </>
    );
  }
}
