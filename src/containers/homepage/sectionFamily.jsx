import React from "react";
import styled from "styled-components";

import Forrest from "../../assets/pictures/forrest.jpg";
import Boy from "../../assets/pictures/boy.jpg";
import BoyBg from "../../assets/pictures/boyBg.jpg";

import { SectionTitle } from "../../components/sectionTitle";
import { Text } from "../../components/text";
import { Button } from "../../components/button";

const SectionFamilyContainer = styled.div`
    width: 100%;
    min-height: 1430px;
`;

const BannerPicture = styled.div`
    width: 100%;
    height: 550px;

    background-image: url(${Forrest});
    background-size: cover;
`;

const ParagraphWrapper = styled.div`
    width: 100%;
    height: 800px;
    
    position: relative;
`;

const ParagraphFamily = styled.div`
    top: 20%;
    left: 10%;
    position: absolute;
    height: 490px;
`;

const PictureBoy = styled.div`
    width: 500px;
    height: 550px;

    top: 13%;
    right: 13%;

    background-image: url(${Boy});
    background-size: cover;
    position: absolute;
`;

const PictureBackground = styled.div`
    width: 500px;
    height: 550px;

    top: 23%;
    right: 8.15%;
    
    background-image: url(${BoyBg});
    background-size: cover;
    position: absolute;
`;



export function SectionFamily(props) {
    return ( 
    <SectionFamilyContainer>
        <BannerPicture></BannerPicture>
        <ParagraphWrapper>
            <ParagraphFamily>
                <SectionTitle>Family fun for every <br />season</SectionTitle>
                <Text>Each season brings unique simple pleasures <br />
                to Na Stope. Dip into the lake on a hot <br />
                summer day. Hike the ridge trails during <br />
                the fall leave season, or go sledding in the <br />
                winter. Time in nature is food for the soul. <br />
                Time with family is essential.</Text>
                <Button>EXPLORE</Button>
            </ParagraphFamily>
            <PictureBackground />
            <PictureBoy />
        </ParagraphWrapper>
    </SectionFamilyContainer>
    );
}