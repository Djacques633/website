import styled from "styled-components";

export const HeaderContainer = styled.header`
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    margin: 0px;
    padding: 10px;
    background-color: #1B262C;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Link = styled.a`
  .active {
  }
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  margin: 0 8px;
  text-decoration: none;
  cursor: pointer;
  transition: 300ms;
  border-radius: 10px;
  :hover {
    background-color: black
  }
`;