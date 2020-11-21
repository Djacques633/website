import styled from 'styled-components';

export const ProjectTitle = styled.div`
    font-size: 26px;
    font-family: Monospaced, monospace;
    text-align: left;
    color: #ddd;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ProjectContainer = styled.div`
    width: 100%;
    height: 225px;
    max-height: 225px;
    margin-bottom: 10px;
    color: white;
    background-color: #0F4C75;
    border: solid white 1px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: scroll;
`;
export const Details = styled.div`
    width: 100%auto;
    color: whitesmoke;
    margin: 20px;
    flex-wrap: wrap;
`;

export const Pic = styled.img`
    width: 50%;
    height: 100%;
`;