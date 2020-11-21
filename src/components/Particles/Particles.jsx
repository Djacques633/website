import React, {Component} from 'react';
import config from "./index.json";
import {Canvas, Container, Greeting, Hi, MyNameIs} from './Particles.style';

export default class ParticlesCom extends Component {

    render() {
        return(
            <Container>
                <Canvas params = {config}></Canvas>
                <Hi>
                    Hi, &nbsp;
                </Hi>
                <MyNameIs>
                     my name is &nbsp;
                </MyNameIs>
                <Greeting>   
                    Daniel Jacques
                </Greeting>
            </Container>
        )
    }

}