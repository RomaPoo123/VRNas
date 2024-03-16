import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/TitleSection";
import { SectionText } from "../../../components/SectionText.styled";
import { Pricing } from "./pricing/Pricing";
import { theme } from "../../../styles/Theme";
import OurPricingimg from "../../../assets/image/Pricingimg.png"

export const  OurPricing = ()=> {
    return (
        <StyledOurPricing>
            <Container>
                <FlexWrapper direction={"column"}>
                    <TitleSection name={"our pricing"} title={"Affordable VR Services for Everyone"}/>
                    <SectionText>At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.
                    </SectionText>
                    <BlockPricing>
                    <Wrapper>
                        <Pricing title={"Customizable Packages"} text={"We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget."}/>
                        <Pricing title={"Flexible Payment Options"} text={"We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs."}/>
                        <Pricing title={"Satisfaction Guarantee"} text={"We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund."}/>
                    </Wrapper>
                    <img src={OurPricingimg} alt="" />
                    </BlockPricing>
                </FlexWrapper>
            </Container>
        </StyledOurPricing>
    )
};


const StyledOurPricing = styled.section`
    
`
const BlockPricing =styled.div`
    display: flex;
    justify-content: space-between;
    background: rgba(37, 37, 50, 0.81);
    border: 1px solid;
    border-image: ${theme.colors.panelBorder};
    border-image-slice: 1;
`
const Wrapper = styled.div`
        
`