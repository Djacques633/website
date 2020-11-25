import styled from "styled-components"
import Particles from 'react-particles-js';

export const Container = styled.div`
    height: 100vh;
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

export const Greeting = styled.h1`
    font-size: 5vw;
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
    animation: Greeting 1 1s linear;
    @keyframes Greeting{
        from {
            transform: translateX(1000px);
        }
        to {
            transform: translate(0px);
        }
    }
`;

export const Hi = styled.h1`
    font-size: 5vw;
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
    animation: Hi 1 1s linear;
    @keyframes Hi{
        from {
            transform: translateX(-1000px);
        }
        to {
            transform: translate(0px);
        }
    }
`;
export const MyNameIs = styled.h1`
    font-size: 5vw;
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
    animation: MyNameIs 1 1s linear;
    
    @keyframes MyNameIs{
        from {
            transform: translateY(-1000px);
        }
        to {
            transform: translate(0px);
        }
    }
`;