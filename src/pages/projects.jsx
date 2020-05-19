import React from "react";
import Header from "../components/header";
const Projects = () => {
    return (<>
        <Header></Header>
        <h1>Projects</h1>
        <h3><a
            className="App-link"
            href="/"
            target="_blank"
        >
            Personal Website 
            </a> (May 2020)</h3><p color="white">What better project to pick up during global quarantine than a personal website/portfolio?
            <h6>Technologies used: HTML, React, CSS</h6>
        </p>
        <h3><a
            className="App-link"
            href="https://devpost.com/software/minecraft-discord-bot"
            target="_blank"
            rel="noopener noreferrer"
        >
            Kubernetes Server Manager*
        </a> (Feb 2020)</h3><p color="white">A second (out of 50!!) place award winning bot created by a team of sophomore/juniors just trying to learn something in a hackathon.
        The bot was entirely controlled through a discord user-interface. An API server was created in order to process the calls from the users and deploy a Minecraft server
            using the Google Kubernetes Engine. This allowed us to create a server on demand with one simple command. <br></br>Each server also came equipped with a Java plugin.
            This plugin kept track of the amount of time that a user played on the server. If they played more than they financially contribute to the server, the API server detects this via a
            virtual currency and makes the experience unenjoyable until they contibute to society.
            <h6>Technologies used: Kubernetes, Google BigQuery, Google Cloud Sql, Typescript, Java, Discord API</h6>
        </p>
        <h3>Ohio University Upperclass Scholarship Application (January 2020 - May 2020)</h3><p color="white">The Upperclass scholarship was an assignment given to a group of three students working as software
        engineers for Ohio University's IT department (OIT). What once was a mess of code written in ColdFusion was turned into a sleak design written in Angular/Typescript. I was tasked
        with the API development, in which I was able to familiarize myself greatly with databases and various other backend as well. We worked together in an agile SCRUM development group
        and turned in a great product to our customer!
            <h6>Technologies used: Kubernetes, Skaffold, Typescript, SQL, Java, Discord API</h6>
        </p>
        <h3>4-Degree of Freedom Table:</h3><p>
            <h6>Technologies used: Fusion 360, Eagle, Arduino, Python, </h6>
        </p>
        <h1>View my resume for more!</h1>

    </>
    );
};

export default Projects;