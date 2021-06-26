import React from "react";
import styled from "styled-components";
import { ReservationButton } from "../../components/reservationButton"; 
import { Hamburger } from "../../components/hamburger"

const NavbarContainer = styled.div`
  width: 100%;
  height: 160px;
`;

const LogoText = styled.div`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: 0.05em;
  color: white;
  position: absolute;

  left: 50%;
  transform: translate(-50%);
  top: 45px;
`;


export function Navbar(probs) {
    return <NavbarContainer>
        <Hamburger />
        <LogoText>NA STOPE</LogoText>
        <ReservationButton>RESERVATION</ReservationButton>
    </NavbarContainer>;
}