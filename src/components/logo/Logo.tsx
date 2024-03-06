import styled from "styled-components";
import { Icon } from "../icon/Icon";


export const Logo = ()=> {
    return (
        <StyledLogo href="#">
            <Icon iconId={"Logo"} width={"38.000000"} height={"30.000000"} viewBox={"0 0 38 30"}/>
            <Icon iconId={"Logo1"} width={"59.000000"} height={"30.000000"} viewBox={"0 0 59 18"}/>
        </StyledLogo>
    )
};

const StyledLogo= styled.a`
    svg + svg {
        margin-left: 4px;
    }
`