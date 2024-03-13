import React from "react";
import styled, {css} from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
    width?: string
    height?: string

    btnType?:  'btnTypeOne'| 'btnTypeTwo'

    ButtonText: string
}


export const Button = (props:ButtonPropsType)=>{
    return (
        <StyledButton ButtonText={props.ButtonText} btnType={props.btnType} width={props.width} height={props.height}>
            {props.ButtonText}
        </StyledButton>
    );
};


const StyledButton= styled.button<ButtonPropsType>`
    width: ${props=>props.width || "130px"};
    height: ${props=>props.height || "52px"};

    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.5px;
    color: ${theme.colors.font};

    background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233) 100%);

    ${(props)=>props.btnType==='btnTypeOne' && css<ButtonPropsType>`

    color: ${theme.colors.font};
    font-size: 16px;
    font-weight: 300;
    text-transform: none;

    border: 1px solid transparent ;
    border-image: linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233)) ;
    -moz-border-image: -moz-linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-border-image: -webkit-linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233));
    border-image-slice: 1;

    background: ${theme.colors.transparent};

    `}

    ${(props)=>props.btnType ==='btnTypeTwo' && css<ButtonPropsType>`
    border: none;
    border: 1px solid transparent ;
    border-image: linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233)) ;
    -moz-border-image: -moz-linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-border-image: -webkit-linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233));
    border-image-slice: 1;
    background: ${theme.colors.transparent1};

    `}

`