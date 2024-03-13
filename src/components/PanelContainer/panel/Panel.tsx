import React from "react";
import styled from "styled-components";
import { Icon } from "../../icon/Icon";
import { theme } from "../../../styles/Theme";

type PanelPropsType = {
    width?: string
    hight?: string
    IconId: string
    text?: string
}

export const Panel = (props: PanelPropsType)=>{
    return (
        <StyledPanel width={props.width} hight={props.hight} IconId={props.IconId}>
            <Icon iconId={props.IconId} width={"70px"} height={"70px"} viewBox={"0 0 70 70"}/>
            <PanelTitle>Expertise</PanelTitle>
            <PanelText>{props.text}</PanelText>
        </StyledPanel>
    )
};

const StyledPanel = styled.div<PanelPropsType>`
    width: ${props =>props.width || "auto"};
    height: ${props =>props.hight || "auto"};
    background-color: ${theme.colors.panelColor} ;
    padding: 42px 50px 53px 64px;
`

const PanelTitle = styled.h3`
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