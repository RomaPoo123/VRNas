import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Panel } from "./panel/Panel";
import { theme } from "../../styles/Theme";

export const WhyChooseUs =() => {
    return (
        <StyledWhyChooseUs>
            <FlexWrapper>
                <Panel IconId ={"Panel1"} text={"Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service"}/>
                <Panel IconId ={"Panel2"} text={"Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals"}/>
                <Panel IconId ={"Panel3"} text={"We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience."}/>
            </FlexWrapper>
        </StyledWhyChooseUs>
    )
};

const StyledWhyChooseUs = styled.article`
    display: flex;
    border: 1px solid transparent;
    border-image: ${theme.colors.panelBorder};
    border-image-slice: 1;
`


