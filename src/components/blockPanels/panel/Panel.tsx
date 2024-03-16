import React from "react";
import styled from "styled-components";
import { Icon } from "../../icon/Icon";
import { theme } from "../../../styles/Theme";

type PanelPropsType = {
    width?: string
    height?: string
    IconId: string
    title: string
    text: string
    viewBox: string
}

export const Panel = (props: PanelPropsType)=>{
    return (
        <StyledPanel>
            <Icon iconId={props.IconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <PanelTitle>{props.title}</PanelTitle>
            <PanelText>{props.text}</PanelText>
        </StyledPanel>
    )
};

const StyledPanel = styled.div`
    background-color: ${theme.colors.panelColor} ;
    padding: 42px 50px 53px 64px;
`

export const PanelTitle = styled.h3`
    color: ${theme.colors.font};
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0%;
    margin: 42px 0 12px;
`
const PanelText = styled.p`
    color: ${theme.colors.panelText};
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: left;
`