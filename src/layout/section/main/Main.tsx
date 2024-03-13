import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import MainImage from "../../../assets/image/MainImage.png"
import { theme } from "../../../styles/Theme";
import { WhyChooseUs } from "../../../components/PanelContainer/WhyChooseUs";

export const Main = ()=> {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <MainContent>
                        <MainTitle>Immerse Yourself in Virtual Reality</MainTitle>
                        <SmallText>Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</SmallText>
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
const SmallText = styled.span`
    max-width: 446px;
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0%;

    margin: 12px 0 32px;
`
const HappyClients = styled.div`
    
`