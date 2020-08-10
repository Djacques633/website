import React, {Component} from 'react';
import config from "./index.json";
import Particles from 'react-particles-js';
import s from "./Particles.css";
import './Particles.css'
export default class ParticlesCom extends Component {

    render() {
        console.log(s);
        return(
            // <h1>hello world</h1>
            <div className = "container">
                <Particles className = "canvas" params = {config}></Particles>
            </div>
        )
    }

}