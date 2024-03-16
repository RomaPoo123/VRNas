import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Icon } from "../icon/Icon";


export const Subscription = ()=> {
    return (
        <StyledSubscription>
            <Title>Subscribe to our newsletter for latest updates</Title>
            <SubForm>
                <Icon iconId={"sub"} width={"24px"} height={"24px"} viewBox={"0 0 24 24"}/>
                <StrAdress placeholder={"Enter your email address"}></StrAdress>
                <BtnAdress>
                    <Icon iconId={"send"} width={"16px"} height={"16px"} viewBox={"0 0 16 16"}/>
                </BtnAdress>
            </SubForm>
        </StyledSubscription>
    )
};

const StyledSubscription = styled.div`
    width: 100%;
    background: ${theme.colors.border};
    display: flex;
    align-items: center;
    

`
const Title = styled.h3`
    color: ${theme.colors.font};
    font-size: 40px;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: -0.5%;
`
const SubForm = styled.form`
    max-width: 365px;
    height: 56px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    background-color:rgba(255, 255, 255, 0.07);

    svg {
        margin-right: 8px;
        margin-left: 14px;
    }

`
const StrAdress = styled.input`
    background-color:rgba(255, 255, 255, 0.07);
    border: none;
    margin-right: 84px;
`
const BtnAdress =styled.button`
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.21);

    svg {
        margin: 0 auto;
        
    }
`