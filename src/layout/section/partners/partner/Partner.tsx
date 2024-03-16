import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Icon } from "../../../../components/icon/Icon";

export const Partner = ()=> {
    return (
        <StyledPartner>
            <BodyPartner>
            <Icon iconId={"part"} width={"102px"} height={"102px"} viewBox={"0 0 102 102"}/>
            </BodyPartner>
        </StyledPartner>
    )
};

const StyledPartner = styled.div`
    
`
const BodyPartner = styled.div`
    width: 102px;
    height: 102px;
    border-radius: 50%;
    border: 1px solid;
    border-image: ${theme.colors.panelBorder};
    border-image-slice:1 ;

    
`