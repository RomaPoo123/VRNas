import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import MainImage from "../../../assets/image/MainImage.png"
import { theme } from "../../../styles/Theme";
import { WhyChooseUs } from "../../../components/PanelContainer/WhyChooseUs";
import { SectionText } from "../../../components/SectionText.styled";

export const Main = ()=> {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <MainContent>
                        <MainTitle>Immerse Yourself in Virtual Reality</MainTitle>
                        <SectionText>Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</SectionText>
                        <Button ButtonText={"Discover More"} width={"212px"} height={"50px"}/>
                        <HappyClients>
                        </HappyClients>
                    </MainContent>
                    <img src={MainImage} alt="" />
                </FlexWrapper>
                <WhyChooseUs/>
            </Container>
        </StyledMain>
    )
};


const StyledMain = styled.section`
    margin-bottom: 120px;
`
const MainContent = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 540px;
    margin-top: 72px;
`
const MainTitle = styled.h1`
    color: ${theme.colors.font};
    font-size: 64px;
    font-weight: 600;
    line-height: 83px;
    letter-spacing: -0.5%;
`

const HappyClients = styled.div`
    
`