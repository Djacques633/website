import styled from 'styled-components';
export const ProjectTitle = styled.div`
    font-size: 26px;
    font-family: Monospaced, monospace;
    text-align: left;
    color: black;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ProjectContainer = styled.div`
    width: 100%;
    height: 225px;
    max-height: 225px;
    margin-bottom: 10px;
    color: black;
    box-shadow: 4px ${({flipped}) => flipped ? "-" : ""}4px #1fabc4; // Flip this if the card is flipped
    border: solid white 1px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: scroll;
`;

export const Details = styled.div`
    width: 100%auto;
    color: black;
    margin: 20px;
    flex-wrap: wrap;
`;

export const Pic = styled.img`
    width: 45%;
    height: 100%;
    margin-left: 35px;
`;
