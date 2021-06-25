import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
    position: fixed;
    right: 6%;
    top: 53px;

    background-color: Transparent;
    color: ${theme.primary};

    width: 147px;
    height: 42px;

    border: 0.5px solid #FFFFFF;
    box-sizing: border-box;

    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.025em;
    justify-content: center;
    padding: 0;

    &:hover {
        background-color: rgba(255,255,255,0.15);
        cursor: pointer;
    }

    &:active {
        color: black;
    }
`;

export function ReservationButton(props) {
    return <ButtonWrapper {... props}>{ props.children }</ButtonWrapper>;
}