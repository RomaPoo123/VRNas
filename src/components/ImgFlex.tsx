import React from "react";
import styled from "styled-components";




type ImgFlexPropsType = {
width?: string
height?: string
top?: string
img: string

}



export const ImgFlex = (props:ImgFlexPropsType)=>{
    return (
    <ImageContainer>
        <StyledImage src={props.img}/>
    </ImageContainer>)
}

const ImageContainer = styled.div`
max-width: 736px;
width: 100%;
max-height: 354px;

position: absolute;
top:-31px;
right: -114px;

overflow: hidden;

`
const StyledImage = styled.img`
    transform:translateY(-310px);
`