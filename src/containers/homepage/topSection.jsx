import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/background.jpg";
import { theme } from "../../theme";
import { Navbar } from "../../components/navbar";
import { DownArrow } from "../../components/downArrow";
import { Element, scroller } from "react-scroll";

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-size: cover;
`; 

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    // background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
`;

const GreetingText = styled.h1`
    font-family: Cardo;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 87px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em; 

    position: absolute;
    bottom: 15.3%;
    left: 8.3%;

    color: ${theme.primary};
    margin: 0;
`;

const ScrollPrompt = styled.div`

    bottom: 12%;
    left: 8.3%;
    position: absolute;
    width: 227px;
    height: 34px;

    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.13em;

`;

const DownArrowWrapper = styled.div`
    position: absolute;
    bottom: 8%;
    left: 8.45%;

    &: hover {
        color: black;
        cursor: pointer;
    }
`;

export function TopSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo("sectionSpa", {smooth: true, duration: 1500});
    };

    return (
    <Element name="topSection">
        <TopContainer> 
            <BackgroundFilter>
                <Navbar />

                <GreetingText>Welcome to <br />  the Ore Mountains</GreetingText> 
                <ScrollPrompt>Scroll down</ScrollPrompt>
                <DownArrowWrapper onClick={scrollToNextSection}>
                    <DownArrow />
                </DownArrowWrapper>
                
            </BackgroundFilter>
        </TopContainer>
    </Element>
    );
}