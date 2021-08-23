import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import MessagesBlock from "./MessagesBlock";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <StyledWrapper>
      <ChatHeader />
      <MessagesBlock />
      <ChatInput />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;

export default Chat;
