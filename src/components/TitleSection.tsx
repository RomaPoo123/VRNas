import React from "react";
import styled, {css} from "styled-components";
import { theme } from "../styles/Theme";


type TitleSectionPropsType = {
    name: string
    title: string 
    type?: string
}


export const TitleSection= (props:TitleSectionPropsType)=> {
    return (
        <StyledTitleSection name={props.name} title={props.title} type={props.type}>
            <NameSection>{props.name}</NameSection>
            <Title>{props.title}</Title>
        </StyledTitleSection>
    )
}

const StyledTitleSection = styled.div<TitleSectionPropsType>`

${(props)=>props.type ==='two' && css<TitleSectionPropsType>`
display: flex;
flex-direction: column;
align-items: center;
`}

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
    background: ${theme.colors.border};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    
`