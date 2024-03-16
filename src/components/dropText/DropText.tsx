import React from "react";
import styled from "styled-components";
import { SectionText } from "../SectionText.styled";

type DropTextPropsType = {
    legend: string;
    text: string;
}


export const DropText = (props:DropTextPropsType)=> {
    return (
        <StyledDropText>
            <summary>{props.legend}</summary>
            <SectionText>{props.text}</SectionText>
        </StyledDropText>
    )
};


const StyledDropText =styled.details`
    
`