import { useMemo } from "react";
import styled from "styled-components";
import Message from "./Message";

import firebase from "firebase";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";

import { compareByTimestamp } from "../../../../assets/generalUtils";

const MessagesBlock = () => {
  const messagesRef = firebase.firestore().collection("messages");

  const threadId = useSelector((state) => state.chat.threadId);

  const senderQuery = messagesRef.where("sender_uid", "in", [
    firebase.auth().currentUser.uid,
    threadId,
  ]);

  const [allMessages] = useCollectionData(senderQuery);

  const messages = useMemo(
    () =>
      allMessages
        ?.filter(
          (message) =>
            (message.reciever_uid === firebase.auth().currentUser.uid &&
              message.sender_uid === threadId) ||
            (message.reciever_uid === threadId &&
              message.sender_uid === firebase.auth().currentUser.uid)
        )
        .sort(compareByTimestamp)
        .slice(-50),
    [allMessages]
  );

  return (
    <StyledWrapper>
      {console.log(messages)}
      {messages?.map((message) => {
        return (
          <Message
            photoURL={message.photoUrl}
            isYours={
              message.sender_uid === firebase.auth().currentUser.uid
                ? true
                : false
            }
          >
            {message.text}
          </Message>
        );
      })}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex: 2;
  overflow: auto;
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 2px;
  }
`;

export default MessagesBlock;
