import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/background.jpg";
import { Logo } from "../../components/logo";
import { Marginer} from "../../components/marginer/index.jsx"
import { theme } from "../../theme";
import { ReservationButton } from "../../components/reservationButton";
import { DownArrow } from "../../components/downArrow";
// import Hamburger from "../../assets/illusrations/hamburger"

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-size: cover;
    position: relative;
`; 

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    // background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

    display: flex;
    flex-direction: column;
    // align-items: center;

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

    // color: ${theme.primary};
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.13em;

`

const HamburgerContainer = styled.img`
  width: 8em;
  height: 8em;
  background-color: black;
  `;


export function TopSection(props) {
    return <TopContainer>
        <BackgroundFilter>
            <Marginer direction="vertical" margin="3em" />
            <Logo />
            <ReservationButton>RESERVATION</ReservationButton>

            {/* <HamburgerContainer src={hamburger} inline={inline} small={small}/> */}

            <GreetingText>Welcome to <br />  the Ore Mountains</GreetingText> 
            <ScrollPrompt>Scroll down</ScrollPrompt>
            

            {/* <DownArrow /> */}

        </BackgroundFilter>
    </TopContainer>;
}