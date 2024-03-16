import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/TitleSection";
import { Icon } from "../../../components/icon/Icon";
import PartnersImg from "../../../assets/image/Image.png"
import PartnersIm from "../../../assets/image/Partnersimg.png"
import { Partner } from "./partner/Partner";

export const Partners = ()=> {
    return (
        <StyledPartners>
            <Container>
                <FlexWrapper justify={"center"} wrap={"wrap"}>
                    <TitleSection name={"Our Trusted Partners"} title={"Discover the Companies We Work With"} type={"two"}/>
                    <img className="one" src={PartnersImg} alt="" />
                    <img className="two" src={PartnersIm} alt="" />
                    <Partner></Partner>
                    
                </FlexWrapper>
            </Container>
        </StyledPartners>
    )
};

const StyledPartners = styled.section`
    position: relative;
    height: 50vh;
    margin-bottom: 100px;

    .one {
        margin: 0 auto;
    };

    .two {
        position: absolute;
        bottom: 0;
        transform: translate(35px, 235px);
    }
`