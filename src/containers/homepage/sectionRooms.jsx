import React from "react";
import styled from "styled-components";

import Rooms from "../../assets/pictures/rooms.jpg";

import { SectionTitle } from "../../components/sectionTitle";
import { Text } from "../../components/text";
import { Button } from "../../components/button";

const SectionRoomsContainer = styled.div`
    width: 100%;
    min-height: 750px;

    position: relative;
`;

const RoomsDisplay = styled.div`
    width: 820px;
    min-height: 550px;

    top: 10%;
    left: 8%;

    position: absolute;
`;

const RoomsPicture = styled.div`
    height: 480px;

    background-image: url(${Rooms});
    background-size: cover;
`;

const ParagraphRooms = styled.div`
    width: 350px;
    min-height: 500px;

    right: 10%;
    top: 10%;

    position: absolute;
`;

const Mover = styled.div`
    position: relative;

    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;

    font-size: 50px;
    color: #646464;
`;

const Dots =  styled.div`
    position: absolute;
    right: 0%;
    color: #646464;
    opacity: 0.5;
`;

const MoverBack = styled.div`
    width: 60px;
    height: 100%;

    top: 20px;

    font-size: 50px;
    position: absolute;
    opacity: 0.5;

    &:hover {
    background-color: rgba(0,0,0,0.05);
    cursor: pointer;
    opacity: 1;
    }

    &:active {
        color: black;
    }
`;

const MoverForward = styled.div`
    width: 60px;
    height: 100%;

    top: 20px;

    left: 10%;
    position: absolute;
    opacity: 0.5;

    &:hover {
    opacity: 1;
    background-color: rgba(0,0,0,0.05);
    cursor: pointer;
    }

    &:active {
        color: black;
    }
`;



export function SectionRooms(props) {
    return ( 
        <SectionRoomsContainer>
            <RoomsDisplay>
                <RoomsPicture />
                <Mover> 
                    <MoverBack>{"<"}</MoverBack>
                    <MoverForward>{">"}</MoverForward>
                    <Dots>. . . . . . .</Dots>
                </Mover>
            </RoomsDisplay>
            <ParagraphRooms>
                <SectionTitle>Relaxed country <br />living</SectionTitle>
                <Text>Na Stope offers five distinct rooms <br />
                and a number of home styles all <br />
                set against dramatic landscape <br />
                views. Choose a comfortable <br />
                lodge by the Clubhouse or a <br />
                spacious townhouse among the <br />
                tolling hills.</Text>
                <Button>SEE MORE</Button>
            </ParagraphRooms>

        </SectionRoomsContainer>
    );
}