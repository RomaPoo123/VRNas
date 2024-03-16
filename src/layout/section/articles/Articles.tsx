import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/TitleSection";
import { Button } from "../../../components/Button";
import { Subscription } from "../../../components/subscription/Subscription";


export const Articles = () => {
    return (
        <StyledArticles>
            <Container>
                <FlexWrapper direction={"column"} justify={"space-between"} align={""}>
                    <TitleSection name={"our Articles"} title={"Stay Up-to-Date with Our VR Insights"}/>
                    <Button btnType={"btnTypeTwo"} width={"141px"} height={"50px"} ButtonText={"see all"} />
                    <Subscription/>
                </FlexWrapper>

            </Container>
        </StyledArticles>
    )
};

const StyledArticles = styled.section`
    
`
