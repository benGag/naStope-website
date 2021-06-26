import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    position: absolute;
    left: 0;
    bottom: 0;

    background-color: Transparent;
    color: #646464;

    width: 162px;
    height: 64px;

    border: 0.5px solid #646464;
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
        background-color: rgba(0,0,0,0.05);
        cursor: pointer;
    }

    &:active {
        color: black;
    }
`;

export function Button(props) {
    return <ButtonWrapper {... props}>{ props.children }</ButtonWrapper>;
}