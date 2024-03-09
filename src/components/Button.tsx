import React from "react";
import styled, {css} from "styled-components";

type ButtonPropsType = {
    width?: string
    height?: string

    btnType?:  'sectionbtn'| 'headbtn'

    ButtonText: string
}


export const Button = (props:ButtonPropsType)=>{
    return (
        <StyledButton ButtonText={props.ButtonText} btnType={props.btnType || "sectionbtn"}>
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

    border: 1px solid transparent ;
    border-image: linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233)) ;
    -moz-border-image: -moz-linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-border-image: -webkit-linear-gradient(0deg, rgb(12, 186, 241), rgb(233, 92, 233));
    border-image-slice: 1;
    background-color: rgba(255, 255, 255, 0.0);

    ${(props)=>props.btnType==='headbtn' && css<ButtonPropsType>`
    color:#fff;
    font-size: 16px;
    font-weight: 300;
    text-transform: none;
    `}

    ${(props)=>props.btnType ==='sectionbtn' && css<ButtonPropsType>`
    border: none;
    background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233) 100%);
    `}

`