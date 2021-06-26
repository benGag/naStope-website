import React from "react";
import styled from "styled-components";

import { Logo } from "../../components/logo";


const Container = styled.div`
    width: 100%;
    height: 430px;
    background-color: #857E74;
    position: relative;
`;

const LeftSide = styled.div`
    width: 430px;
    height: 100%;

    background-color: white;
    border: 1px solid #A39E97;
    position: absolute;
 
    text-align: center;

    display:flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center;
    
`;

const Contact = styled.div`
    // border-style: solid;
    width: 300px;
    height: 200px;
    top: 20%;

    position: absolute;
    left: 35%;
`;

const ContactTitle = styled.div`
    Font-family: Cardo;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 60px;
    color: white;
`;

const ContactElement = styled.div`
    color: white;

    font-size: 20px;
    line-height: 40px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
`;

const Links = styled.div` 
    width: 400px;
    height: 200px;
    top: 24%;
    position: absolute;
    right: 0%;

`;

const LinkElement = styled.div` 
    color: white;
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 40px;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`;



export function Footer(props) {
    return ( 
        <Container>
            <LeftSide>
                <Logo />
            </LeftSide>
            <Contact>
                <ContactTitle>Contact us</ContactTitle>
                <ContactElement>Phone: +31 6 1517 5001</ContactElement>
                <ContactElement>E-mail: info@nastope.cz</ContactElement>
                <ContactElement>IG: instagram</ContactElement>
            </Contact>
            <Links>
                <LinkElement>About</LinkElement>
                <LinkElement>Experiences</LinkElement>
                <LinkElement>Residences</LinkElement>
                <LinkElement>Contact</LinkElement>
            </Links>
        </Container>
    );
}