import React from "react";
import styled from "styled-components";
import AboutUsImg from "../../../assets/image/AboutUs.png"
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { TitleSection } from "../../../components/TitleSection";
import { SectionText } from "../../../components/SectionText.styled";
import { Advantages } from "./advantages/Advantages";



export const AboutUs = () => {
    return (
        <StyledAboutUs>
            <Container>
                <FlexWrapper>
                <img src={AboutUsImg} alt="" />
                <div>
                    <TitleSection name={"about us"} title={"Bring your events to life like never before with our VR services."}/>
                    <SectionText>VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</SectionText>
                    <Advantages text="Cutting-Edge Technology"/>
                    <Advantages text="Versatile Applications"/>
                    <Advantages text="Affordable and Accessible"/>
                    <Button ButtonText={"read more"} width={"172px"} height={"50px"}></Button>
                </div>
                </FlexWrapper>
            </Container>
        </StyledAboutUs>
    )
};


const StyledAboutUs = styled.section`
    position: relative;
        z-index: 0;

    ${FlexWrapper} {
        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            left: -24px;
            bottom: 0;
            width: 400px;
            height: 500px;
            z-index: -1;
            background-color: rgb(37, 37, 50);
        }
    }

`

