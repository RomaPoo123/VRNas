import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";


type AdvantagesPropsType = {
    text: string
}

export const Advantages =(props:AdvantagesPropsType)=> {
    return (
        <StyledAdvantages>
            <Icon iconId="check-box" width={"16px"} height={"16px"} viewBox={"0 0 16 16"}/>
            <AdvantagesText>{props.text}</AdvantagesText>
        </StyledAdvantages>
    )
};

const StyledAdvantages = styled.article`
display: flex;
align-items: center;


`
const AdvantagesText = styled.h4`
    color: ${theme.colors.font};
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0%;
    margin-left: 12px;
`


