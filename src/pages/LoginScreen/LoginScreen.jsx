import React from "react";
import Container from "../../components/Container";
import knotIcon from "../../icons/knot.svg";
import MainContainer from "../../components/MainContainer";
import styled from "styled-components";
import LoginContainer from "./components/LoginContainer";

const LoginScreen = () => {
  return (
    <MainContainer>
      <Container>
        <StyledTitle>
          <StyledImg src={knotIcon} alt="" width="100px"></StyledImg>{" "}
          <h1>
            dotKnot<StyledSup>by QuatroV</StyledSup>
          </h1>
        </StyledTitle>
      </Container>
      <LoginContainer />
    </MainContainer>
  );
};

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  margin-right: 8px;
`;

const StyledSup = styled.sup`
  margin-left: 10px;
  color: rgb(117 117 117);
  font-size: 20px;
`;

export default LoginScreen;
