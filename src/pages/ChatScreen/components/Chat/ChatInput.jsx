import styled from "styled-components";
import InputField from "../../../../components/InputField";
import sendIcon from "../../../../icons/send.svg";

import { useSelector } from "react-redux";

import firebase from "firebase";

const ChatInput = () => {
  const threadId = useSelector((state) => state.chat.threadId);
  const handleClick = async () => {
    const { uid, photoURL } = firebase.auth().currentUser;
    const messagesRef = firebase.firestore().collection("messages");
    await messagesRef.add({
      text: document.querySelector("#send_msg_field").value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoUrl: photoURL,
      sender_uid: uid,
      reciever_uid: threadId,
    });
    document.querySelector("#send_msg_field").value = null;
  };
  return (
    <StyledWrapper>
      <StyledInputField
        id="send_msg_field"
        placeholder="Type your message..."
        autoComplete="off"
      ></StyledInputField>
      <ImageWrapper>
        <StyledImg
          src={sendIcon}
          onClick={handleClick}
          width="25px"
        ></StyledImg>
      </ImageWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
`;

const StyledInputField = styled(InputField)``;

const StyledImg = styled.img`
  margin-left: 2px;
`;

const ImageWrapper = styled.div`
  margin-left: 16px;
  background: #00c6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;

export default ChatInput;
