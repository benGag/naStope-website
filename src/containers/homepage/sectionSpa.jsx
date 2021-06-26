import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import { SectionTitle } from "../../components/sectionTitle";
import { Text } from "../../components/text";
import { Button } from "../../components/button";
import Pool from "../../assets/pictures/pool.jpg";
import Gym from "../../assets/pictures/gym.jpg";


const SectionSpaContainer = styled(Element)`
    width: 100%;
    min-height: 1430px;
    position: relative;
`;

const ParagraphSpa = styled.div`
    right: 15%;
    position: absolute;
    height: 505px;
`;

const PicturePool = styled.div`
    width: 650px;
    height: 837px;
    position: absolute;

    left: 8.3%;

    background-image: url(${Pool});
    background-size: cover;
`;

const PictureGym = styled.div`
    width: 541px;
    height: 361px;
    position: absolute;

    right: 8.7%;
    bottom: 5%;

    background-image: url(${Gym});
    background-size: cover;
`;

const Banner = styled.div`
    width: 100%;
    height: 421px;
    position: relative;

    font-family: Cardo;
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    line-height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #9E8312;
    justify-content: center;
    
`;


export function SectionSpa(props) {
    return (
        <SectionSpaContainer name="sectionSpa">
            <Banner>
            Explore the lush open meadows and scenic valleys. Breath in the crisp <br />
            fresh air of the Hudson Valley. Welcome to Na Stope, <br />
            a discovery land company community
            </Banner>

            
            <ParagraphSpa>
                <SectionTitle>Make time for yourself</SectionTitle>
                <Text>The sun is setting and the days are getting <br />
                shorter, this gives you more time to have <br />
                for yourself. The hotel’s Spa features a large <br />
                heated pool, saunas and, most importantly, <br />
                relaxing Ayurvedic massages that will <br />
                restore your physical and mental strength. <br />
                In the Malá dvorana restaurant, you can <br />
                enjoy a special seasonal menu made from <br />
                local ingredients.</Text>
                <Button>DETAILS</Button>
            </ParagraphSpa>
            <PicturePool>

            </PicturePool>
            <PictureGym>

            </PictureGym>
        </SectionSpaContainer>
    );
}