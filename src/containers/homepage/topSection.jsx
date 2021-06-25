import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/background.jpg";
import { Logo } from "../../components/logo";
import { Marginer} from "../../components/marginer/index.jsx"
import { theme } from "../../theme";

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
    // background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%);

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

    position: fixed;
    bottom: 2.2em;
    left: 2em;

    color: ${theme.primary};
    margin: 0;
`;

export function TopSection(props) {
    return <TopContainer>
        <BackgroundFilter>
            <Marginer direction="vertical" margin="3em" />
            <Logo />
            <GreetingText>Welcome to the Ore Mountains</GreetingText> 
        </BackgroundFilter>
    </TopContainer>;
}