import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/TitleSection";
import { Icon } from "../../../components/icon/Icon";
import Testimoniaimg from "../../../assets/image/Testimoniaimg.png"


export const Testimonial = ()=> {
    return(
        <StyledTestimonial>
            <Container>
                <FlexWrapper justify={"center"}>
                <TitleSection name={"TESTIMONIAL"} title={"What Our Clients Are Saying"} type={"two"}/>
                <Icon iconId={"line"}  width={"1246px"} height={"1246px"} viewBox={"0 0 1246 1246"}/>
                <img src={Testimoniaimg} alt="" />
                </FlexWrapper>
            </Container>
        </StyledTestimonial>
    )
};

const StyledTestimonial = styled.section`
width: 100%;
height: 100vh;

position: relative;
    svg {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-491px,-352px);
    }
`

