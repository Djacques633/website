import React, { Component } from "react";
import { Details, ProjectTitle, ProjectContainer, Pic } from "./Projects.style";
import UPPSCH from "../photos/UPPSCH.png";
import ReactCardFlip from "react-card-flip";
import picture2 from '../photos/textured-blue.jpeg';
import UPPSCH2 from '../photos/UPPSCH2.jpg';
import CLASS1 from '../photos/CLASS.jpg';
import CLASS2 from '../photos/CLASS2.jpg';
export default class Projects extends Component {
  PROJECTS = [
    {
      name: "Ohio University Upperclass Scholarship",
      description: `My first experience working on an enterprise application and also the first 
            application that I've seen to production. The application consisted of two Angular 8
            UIs with a TypeScript resource. I focused my work on the resource and the Admin UI 
            which had key app features such as question, section, date, and application management.`,
      technologiesUsed: [
        "Rancher",
        "Kubernetes",
        "Skaffold",
        "Typescript",
        "Angular",
        "Docker",
        "Git/GitHub",
        "Node.JS",
      ],
      pictureUrl: [UPPSCH, UPPSCH2],
    },
    {
      name: "Ohio University Course Offerings",
      description: `The Course Offerings page for Ohio University is used by every student at some point 
            in their academic career. My team at OIT was assigned a rewrite of this application into an Angular 8 
            and Typescript application. I assisted on both the backend and frontend with extensive testing of the product.`,
      technologiesUsed: [
        "Rancher",
        "Kubernetes",
        "Skaffold",
        "Typescript",
        "Angular",
        "Docker",
        "Git/GitHub",
        "Node.JS",
      ],
      pictureUrl: [CLASS1,CLASS2],

    },
    {
      name: "Kubernetes Server Manager / Games by the Minute, Inc.",
      description: `The Kubernetes Server Manager is a second place winning hackathon project that runs game servers in a
            Docker image managed by a micro-currency. My team and I began the scaffolding to turn this into a C corporation 
            called Games by the Minute, Inc. to formalize our idea into an official product. We integrated AWS into our workflow 
            to automate deployments of our GraphQL API and React front-end.`,
      technologiesUsed: [
        "AWS (ECR, EC2, ECS, S3, IAM, Fargate, Route 53, Lambda, CodeDeploy, CodeBuild, CodePipeline)",
        "Typescript",
        "React",
        "Google Cloud",
        "GraphQL",
        "Docker",
      ],
      pictureUrl: [`../photos/UPPSCH.png`,`../photos/UPPSCH2.png`],

    },
  ];

  projectBooleans = [];
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
    for (let i = 0; i < this.PROJECTS.length; i++) {
      this.projectBooleans[i] = false;
    }
  }

  handleClick(i) {
    // e.preventDefault();
    this.projectBooleans[i] = !this.projectBooleans[i];
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  styles = {
    backgroundImage: "url(" + picture2 + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  render() {
    return this.PROJECTS.map((each, i) => (
      <ReactCardFlip
        isFlipped={this.projectBooleans[i]}
        flipDirection="vertical"
      >
        <ProjectContainer
          onClick={() => {
            this.handleClick(i);
          }}
          style={this.styles}
        >
          <ProjectTitle>{each.name}</ProjectTitle>
          <Details>
            <div style={{ marginBottom: 20 + "px" }}>
              Description: {each.description}
            </div>
            <div>Technologies: {each.technologiesUsed.join(", ")}</div>
          </Details>
        </ProjectContainer>

        <ProjectContainer
          flipped
          onClick={() => {
            this.handleClick(i);
          }}
        >
          <Pic style={{marginRight: 20 + "px"}} src={each.pictureUrl[0]} alt="Work example"></Pic>
          <Pic src={each.pictureUrl[1]} alt="Work example"></Pic>          
        </ProjectContainer>
      </ReactCardFlip>
    ));
  }
}
