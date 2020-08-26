import React from "react";
import Header from "../components/Header/header.jsx";
import './project.css'

class Projects extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <Header />
        <h1>
          Overview
        </h1>
        <h3 class = "overview">
          I have been fortunate throughout my career thusfar to have an overwhelming amount of exposure to projects stemming outside of my academic career across multiple fields such as
          research, software engineering, and design. This page highlights some of the ones I have been the most proud of.
        </h3>
        <h1>Projects</h1>
        <h3>
          Games by the Minute (Current)
        </h3>
        <p>
          Branching from a second place (out of 50!!) hackathon win, this is a startup in which I have 1/3 ownership overall. I believe
          that we were close to first, but alas, we were beat by a VCR that was turned into a toaster. I can't say that I'm mad.
        </p>
        <ul>
          <li>
            Create a GraphQL API for our services on an Apollo server
          </li>
          <li>
            Set up an AWS Code Pipeline to continuously deploy our most up-to-date applications from GitHub into an AWS ECS cluster
          </li>
          <li>
            Founded and incorporated a company, as well as design the business model
          </li>
          <li>
            Built a component library to use throughout our website
          </li>
        </ul>
        <h6>
          Technologies used: Kubernetes, Google BigQuery, Google Cloud Sql, Typescript, Java, Discord API, GraphQL, GitHub, 
          AWS (CodePipeline, CodeBuild, CodeDeploy, EKR, ECS, API Gateway, Route 53, Fargate), React, Apollo, GitHub Actions,
          Storybook, Styled-components
        </h6>
        <h3>
          Ohio University Course Offerings Page (July - August 2020)
        </h3>
        <h3>
          <a href="/" target="_blank">
            Personal Website
          </a>{" "}
          (May 2020)
        </h3>
        <p>
          What better project to pick up during global pandemic than a personal
          website/portfolio?
          <h6>Technologies used: HTML, React, CSS, AWS</h6>
        </p>
        <h3>
          <a
            className="App-link"
            href="https://devpost.com/software/minecraft-discord-bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kubernetes Server Manager*
          </a>{" "}
          (Feb 2020)
        </h3>
        <p>
          A second (out of 50!!) place award winning bot created by a team of
          sophomore/juniors just trying to learn something in a hackathon. The bot
          was entirely controlled through a discord user-interface. An API server
          was created in order to process the calls from the users and deploy a
          Minecraft server using the Google Kubernetes Engine. This allowed us to
          create a server on demand with one simple command. Each server
          also came equipped with a Java plugin. This plugin kept track of the
          amount of time that a user played on the server. If they played more
          than they financially contribute to the server, the API server detects
          this via a virtual currency and makes the experience unenjoyable until
          they contibute to society.
          <h6>
            Technologies used: Kubernetes, Google BigQuery, Google Cloud Sql,
            Typescript, Java, Discord API
          </h6>
        </p>
        <h3>
          Ohio University Upperclass Scholarship Application (January 2020 - August 2020)
        </h3>
        <p>
          The Upperclass scholarship was an assignment given to a group of three
          students working as software engineers for Ohio University's IT
          department (OIT). What once was a mess of code written in ColdFusion was
          turned into a sleak design written in Angular/Typescript. I was tasked
          with the API development, in which I was able to familiarize myself
          greatly with databases and various other backend as well. We worked
          together in an agile SCRUM development group and turned in a great
          product to our customer!
          <h6>
            Technologies used: Kubernetes, Skaffold, Typescript, SQL, Java,
            Discord API
          </h6>
        </p>
        <h3>4-Degree of Freedom Table:</h3>
        <p>
          <h6>Technologies used: Fusion 360, Eagle, Arduino, Python, </h6>
        </p>
        <h2>View my resume for more!</h2>
      </>
    );
  }
};

export default Projects;
