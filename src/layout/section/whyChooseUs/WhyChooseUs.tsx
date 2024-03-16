import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import WhyChooseUsImg from "../../../assets/image/WhyChooseUs.png"
import { DropText } from "../../../components/dropText/DropText";


export const WhyChooseUs = ()=> {
    return (
        <StyledWhyChooseUs>
            <Container>
                <FlexWrapper>
                    <ChooseUsContent>
                        <TitleSection name={"WHY CHOOSE US"} title={"Why Choose Us for Your VR Needs"}/>
                        <DropText legend={"Passionate and Experienced Team"} 
                        text={"We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."}/>
                        <DropText legend={"Customized Solutions"} 
                        text={"We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."}/>
                        <DropText legend={"Exceptional Customer Service"} 
                        text={"We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."}/>
                    </ChooseUsContent>
                <img src={WhyChooseUsImg} alt="" />
                </FlexWrapper>
            </Container>
        </StyledWhyChooseUs>
    )
};


const StyledWhyChooseUs = styled.section`
    
`

const ChooseUsContent = styled.div`
    
`