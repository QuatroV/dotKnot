import { useSelector } from "react-redux";
import styled from "styled-components";

import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const ChatHeader = () => {
  const threadId = useSelector((state) => state.chat.threadId);

  const usersRef = firebase.firestore().collection("users");

  const query = usersRef.where("uid", "==", threadId);

  const [users] = useCollectionData(query);

  console.log(users);
  return (
    <StyledWrapper>
      <StyledUserText>
        Your thread with {users && users[0].displayName}:
      </StyledUserText>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center
  height: 54px;
  padding: 16px;
  font-weight: 700;
  line-height: 54px;
  border-radius: 0px 16px 0px 0px; 
`;

const StyledUserText = styled.div``;

export default ChatHeader;
