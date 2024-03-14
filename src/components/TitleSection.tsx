import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type TitleSectionPropsType = {
    name: string
    title: string 
}


export const TitleSection= (props:TitleSectionPropsType)=> {
    return (
        <StyledTitleSection>
            <NameSection>{props.name}</NameSection>
            <Title>{props.title}</Title>
        </StyledTitleSection>
    )
}

const StyledTitleSection = styled.div`
    
`
const Title = styled.h2`
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: -0.5%;
`
const NameSection= styled.span`
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${theme.colors.border};
    background: ${theme.colors.border};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
`