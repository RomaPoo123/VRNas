import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container.styled";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ImgFlex } from "../../components/ImgFlex";
import HeaderImage  from "../../assets/image/Vector.png"

const MenuItems=["Home", "About us", " Service", "Page", "Blog"]

export const Header= () =>{
    return (
            <StyledHeader>
                <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Logo/>
                        <Menu menuItems={MenuItems}/>
                        <Button ButtonText={"Contact us"} btnType={"btnTypeOne"}/>
                    </FlexWrapper>
                    <ImgFlex width={"736px"} height={"354px"} img={HeaderImage}/>
                </Container>
                
            </StyledHeader>
    );
};

const StyledHeader = styled.header`
margin: 31px 0;
`

