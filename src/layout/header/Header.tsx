import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/Button";
import { StyledContainer } from "../../components/Container.styled";
import headerimage  from "../../assets/image/Vector.png"

const MenuItems=["Home", "About us", " Service", "Page", "Blog"]

export const Header= () =>{
    return (
        <StyledContainer>
            <StyledHeader>
                <Logo/>
                <Menu menuItems={MenuItems}/>
                <Button ButtonText={"Contact us"} btnType={"headbtn"}/>
                <StyledImage src={headerimage}/>
            </StyledHeader>
        </StyledContainer>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`
const StyledImage = styled.img`
    position: absolute;
    top:0;
    right: 0;
    transform:translate(354px, -311px);
`
