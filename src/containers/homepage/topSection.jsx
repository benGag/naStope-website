import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/background.jpg";
import { Logo } from "../../components/logo";

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
    background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%);

    display: flex;
    flex-direction: column;
    align-items: center;

`;

export function TopSection(props) {
    return <TopContainer>
        <BackgroundFilter>
            <Logo />
        </BackgroundFilter>
    </TopContainer>;
}