import React, { Component } from "react";
import { Container, Item, FlexContainer, ItemLink } from "./footer.style";
import "./footer.css";

const LinkedIn = require("../../logos/linkedin.png");
const GitHub = require("../../logos/github.png");
const Facebook = require("../../logos/facebook.png");

export default class Footer extends Component {
    render() {
        return (
            <FlexContainer>
                <Container>
                    <ItemLink href="https://www.linkedin.com/in/daniel-jacques-7b563015a/" target="_blank">
                        <Item src = {LinkedIn} alt="LinkedIn"/>
                    </ItemLink>
                    <ItemLink href="https://github.com/Djacques633" target="_blank">
                        {/* <Item src = {GitHub} /> */}
                        <Item src = {GitHub} alt="GitHub" />
                    </ItemLink>
                    <ItemLink href="https://www.facebook.com/profile.php?id=100007223988373" target="_blank">
                        {/* <Item src = {Facebook} onclick={window.open("www.facebook.com")}/> */}
                        <Item src = {Facebook} alt="Facebook" />
                    </ItemLink>
                </Container>
            </FlexContainer>
        );
    }
}