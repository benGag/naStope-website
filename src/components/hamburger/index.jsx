import React from "react";
import styled from "styled-components";
import HamburgerSvg from "../../assets/illustrations/hamburger.svg";

const HamburgerWrapper = styled.div` 
  // height: 150px;
  // width: 200px;

  display: inline-block;

  left: 100px;
  top: 58px;
  position: relative;
  margin: 0;


  &:hover {
    fill: black;
    cursor: pointer;
    // background-color: rgba(255,255,255,0.15);
  }
`;

export function Hamburger() {
    return <HamburgerWrapper>
        <img src={HamburgerSvg} height={23} alt="React Logo" />
        </HamburgerWrapper>;
}