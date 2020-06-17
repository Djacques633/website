import React from "react";
import Header from "../components/header";
import './project.css'
const Projects = () => {
  return (
    <>
      <Header></Header>
      <h1>
        Overview
      </h1>
      <h3 class = "overview">
        I have been fortunate throughout my career thusfar to have an overwhelming amount of exposure to projects stemming outside of my academic career across multiple fields such as
        research, software engineering, and design. This page highlights some of the ones I have been the most proud of.
      </h3>
      <h1>Projects</h1>
      <h3>
        Games by the Minute (Work in Progress)
      </h3>
      <p>
        This project aims to create an easy access and affordable hosting experience for anyone to play their favorite games. 
        We are using AWS Lambda functions in tandem with API Gateway to host our backend API server that will be accessed by a 
        combination of a React website hosted on an AWS S3 bucket and a Discord bot. The game servers will be hosted on Fargate using ECS, 
        and will have an automatic timer to ensure that they aren't left active without players to acrew costs. This will allow the customer to 
        save money by only being charged for the playtime they use. We want to keep costs growing with our user base, so we want to integrate 
        as many serverless functionality as we can. As described before, the game servers themselves will be on Fargate with ECS, along with 
        AWS lambda as the backing for the API. The data about our users will be stored in DynamoDB in "on-demand" mode until we begin to grow, and 
        will switch it to “provisioned”.
        <br/><br/>
        We currently have 4 people working on this project and all of us are current students at 
        Ohio University. This project is something we built a first prototype for during a hackathon 
        (Revolution UC - https://devpost.com/software/minecraft-discord-bot) and ended up winning second place overall. 
        For this prototype we used Google Cloud as it was encouraged at the hackathon due to them being a sponsor. 
        We knew that in the long run, AWS is what we wanted to use because we are all familiar with it.
      <h6>
        Technologies used: AWS Codebuild, Route 56, Lambda, Gateway, S3, Fargate, ECS, DynamoDB
      </h6>
        </p>
      <p>
        Based on a prototype created in a hackathon at the University of Cincinnatti. TBC
      </p>
      <h3>
        <a href="/" target="_blank">
          Personal Website
        </a>{" "}
        (May 2020)
      </h3>
      <p>
        What better project to pick up during global quarantine than a personal
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
        Ohio University Upperclass Scholarship Application (January 2020 - May
        2020)
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
};

export default Projects;
