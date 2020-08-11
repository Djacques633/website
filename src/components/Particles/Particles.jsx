import React, {Component} from 'react';
import config from "./index.json";
import Particles from 'react-particles-js';
import {Canvas, Container} from './Particles.style';

export default class ParticlesCom extends Component {

    render() {
        return(
            <Container>
                <Canvas params = {config}></Canvas>
            </Container>
        )
    }

}