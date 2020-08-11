import styled from "styled-components"
import Particles from 'react-particles-js';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    min-width: 100%;
    box-sizing: border-box;
    background-color: #0F4C75;
    display: flex;
    margin-top: 70px;

    justify-content: center;
    align-items: center;
    color: #ddd;
`;

export const Canvas = styled(Particles)`
    position: absolute;
    margin-top: 70px;
    
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
`;