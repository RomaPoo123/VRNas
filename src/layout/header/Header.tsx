import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/Button";

const MenuItems=["Home", "About us", " Service", "Page", "Blog"]

export const Header= () =>{
    return (
        <div>
        <Logo/>
        <Menu menuItems={MenuItems}/>
        <Button ButtonText={"Contact us"}/>
        </div>
    )
}