import styled from 'styled-components';

export const FlexContainer = styled.div`
    flex: 1;
`;

export const Container = styled.div`
    left: 0;
    bottom: 0;
    background-color: #1B262C;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 100px;
`;

export const ItemLink = styled.a`
    width: 3%;
    margin: 30px;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        width: 4%;
    }
`;
export const Item = styled.img`
    width: 100%;
    height: 100%;
    /* margin: 30px; */
    /* transition: 1s; */
    /* cursor: pointer; */
    /* :hover { */
        /* width: 50%; */
    /* } */
`;