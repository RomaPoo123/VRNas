import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/TitleSection";
import { Button } from "../../../components/Button";


export const HowToGetStarted = ()=> {
    return (
    <StyledHowToGetStarted>
        <Container>
            <FlexWrapper justify={"center"} >
                <TitleSection name={"HOW TO GET STARTED"} title={"Bringing Your Virtual Reality Dreams to Life"}/>
                <StyledVideo></StyledVideo>
                <Button width={"188px"} height={"50px"} ButtonText={"Get Started"}/>
            </FlexWrapper>
        </Container>
    </StyledHowToGetStarted>

    )
    
};
const StyledHowToGetStarted = styled.section`
    
`
const StyledVideo = styled.video`
    
`
