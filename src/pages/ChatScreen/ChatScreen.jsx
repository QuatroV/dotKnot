import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

const ChatScreen = () => {
  return (
    <StyledContainer>
      <Sidebar></Sidebar>
      <Chat>Chat</Chat>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  width: 80%;
  height: 90%;
  display: flex;
  padding: 0px;
  border: none;
  font-family: "Raleway", sans-serif;
  h1 {
    font-size: 60px;
  }
`;

export default ChatScreen;
