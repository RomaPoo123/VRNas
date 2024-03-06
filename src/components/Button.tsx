import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
    width?: string
    height?: string

    ButtonText: string
}


export const Button = (props:ButtonPropsType)=>{
    return (
        <StyledButton ButtonText={props.ButtonText}>
            {props.ButtonText}
        </StyledButton>
    );
};


const StyledButton= styled.button<ButtonPropsType>`
    width: ${props=>props.width || "130px"};
    height: ${props=>props.height || "52px"};

    border: 1px solid transparent ;
    border-image: linear-gradient(90deg, rgb(233, 92, 233), rgb(12, 186, 241)) ;
    -moz-border-image: -moz-linear-gradient(90deg, rgb(233, 92, 233), rgb(12, 186, 241));
    -webkit-border-image: -webkit-linear-gradient(0deg, rgb(233, 92, 233), rgb(12, 186, 241));
    border-image-slice: 1;

    background-color: none;
`