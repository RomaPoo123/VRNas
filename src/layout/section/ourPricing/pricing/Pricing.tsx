import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { SectionText } from "../../../../components/SectionText.styled";

type PricingPropsType = {
    title: string
    text: string
}


export const Pricing =(props:PricingPropsType) =>{
    return(
        <StyledPricing>
            <Icon iconId={"pricing"} width={"42"} height={"42"} viewBox={"0 0 42 42"}/>
            <div>
                <h4>{props.title}</h4>
                <SectionText>{props.text}</SectionText>
            </div>
        </StyledPricing>
    )
};

const StyledPricing = styled.div`
    display: flex;
    gap:16px;
    p {
        font-weight: 400;
    }
`