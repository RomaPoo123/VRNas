import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText.styled";
import { Panel } from "../../../components/blockPanels/panel/Panel";
import { theme } from "../../../styles/Theme";


export const OurService = ()=> {
    return (
        <StyledOurService>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <TitleSection name={"our Service"} title={"Our Service"} />
                    <SectionText>We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</SectionText>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                        <Panel IconId={"software"}
                            title={"VR Development"}
                            text={"From concept to creation, our team of VR developers will bring your vision to life."}  
                            width={"48px"} 
                            height={"48px"} 
                            viewBox={"0 0 48 48"}/>

                        <Panel  IconId={"design"} 
                            title={"VR Design"} 
                            text={"Our talented VR designers will create immersive and engaging environments that will captivate your audience."} 
                            width={"48px"} 
                            height={"48px"} 
                            viewBox={"0 0 48 48"}/>

                        <Panel IconId={"review2"} 
                            title={"VR Consulting"} 
                            text={"Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations."} 
                            width={"48px"} 
                            height={"48px"} 
                            viewBox={"0 0 48 48"}/>

                        <Panel IconId={"video-control"} 
                            title={"VR Games"} 
                            text={"We offer a wide selection of VR games that are suitable for players of all ages and skill levels."} 
                            width={"48px"} 
                            height={"48px"} 
                            viewBox={"0 0 48 48"}/>

                        <Panel IconId={"events"} 
                            title={"VR Events"} 
                            text={"Make your next event unforgettable with our VR event services."} 
                            width={"48px"} 
                            height={"48px"} 
                            viewBox={"0 0 48 48"}/>

                        <Panel IconId={"theatre"} 
                            title={"VR Entertainment"} 
                            text={"reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen."} 
                            width={"48px"} 
                            height={"48px"} 
                            viewBox={"0 0 48 48"}/>
                        
                </FlexWrapper>
            </Container>
        </StyledOurService>
    )
};

const StyledOurService = styled.section`
    
    
    ${FlexWrapper} {
        gap: 32px ;
        
        div {
            padding: 38px 56px 51px 32px ;
            width: 375px;
            height: 290px;

            border: 1px solid transparent;
        border-image: ${theme.colors.panelBorder};
        border-image-slice: 1;
        }
        
        div:nth-child(2) {
            margin-top: 57px;
        }
        div:nth-child(4) {
            margin-top: -135px;
        }
        div:nth-child(5) {
            margin-top: -78px;
        }
        div:nth-child(3) {
            margin-top: 135px;
        }
        div:nth-child(6) {
            margin-top: 0px;
        }
    }
    
`