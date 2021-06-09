import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer";
// import Particles from "react-particles-js";
import "./index.css";
import ParticlesCom from "../../components/Particles/Particles";
import image from "../../resources/portfoliopic.jpg";
import TechnologyBoxes from "../../components/Technologies/Technologies";
import Quotes from "../../components/Quotes/quotes";
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="page">
          <Header />
          <ParticlesCom />
          <img class="pic" src={image} alt="Me"></img>
          <h1>About me</h1>
          <h3>
            <p>I am a graduate of the class of 2021 at Ohio University.</p>
            <p>
              Here, I hope that I can provide a sense for who I am as a
              professional, as well as a potential employee by highlighting my
              experience in the technology field. Please feel free to contact me
              with any questions.
            </p>
          </h3>
          <h1>What I've done: </h1>
          <h3>Nationwide Application Developer Intern</h3>
          <h3>
            Ohio University Information Technologies Student Software Engineer
          </h3>
          <h3>Ohio University College of Osteopathic Medicine CS Student</h3>
          <h3>Air Force Institute of Technology Cyber Center Lab Intern</h3>
          <h3>
            Air Force Institute of Technology Human Systems Integration Lab
            Intern
          </h3>

          <h1>Technologies & Tools</h1>
          <TechnologyBoxes />
          <h1 class="Quotes">Quotes:</h1>
          <Quotes></Quotes>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default MainPage;
