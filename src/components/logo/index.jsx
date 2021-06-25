import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const LogoContaienr = styled.div`
    display: felx;
    flex-direction: column;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoText = styled.div`
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 64px;
    letter-spacing: 0.05em;

    color: ${theme.primary};
`

export function Logo(props) {
    return (
        <LogoContaienr>
        <LogoText>NA STOPE</LogoText>
        </LogoContaienr> 
    );
}