import React from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { SectionSpa } from "./sectionSpa";
import { SectionFamily } from "./sectionFamily";
import { SectionRooms } from "./sectionRooms";
import { Footer } from "./footer";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function Homepage(props) {
    return (
        <PageContainer>
            <TopSection />
            <SectionSpa />
            <SectionFamily />
            <SectionRooms />
            <Footer />
        </PageContainer>
    );
}