import React from "react";
import styled from "styled-components";
import LongArrowDown from "../../assets/illustrations/longArrow.svg";

const ArrowIcon = styled.div`
    color: white;
    font-size: 25px;
    position: absolute;
    bottom: 8%;
    left: 8.45%;

    &: hover {
        color: black;
        cursor: pointer;
    }
`

export function DownArrow() {
    return <ArrowIcon>
        <img src={LongArrowDown} height={23} alt="Long arrow down" />
        </ArrowIcon>;
}