import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const ArrowIcon = styled.div`
    color: white;
    font-size: 100px;
    position: absolute;
    bottom: 1%;
    left: 10%;
`

export function DownArrow() {
    return <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} /> 
    </ArrowIcon>;
}