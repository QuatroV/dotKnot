import styled from "styled-components";

//Components
import Icon from "../../../../components/Icon";

const ThreadRef = ({ displayName, photoURL, onClick }) => {
  return (
    <>
      <StyledWrapper onClick={onClick}>
        <Icon src={photoURL} width="50px" />
        <StyledText>
          <StyledName>{displayName}</StyledName>
          <StyledLastMessage>Hello, where have you been?</StyledLastMessage>
        </StyledText>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  cursor: pointer;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
`;

const StyledText = styled.span`
  margin-left: 8px;
`;

const StyledName = styled.div``;

const StyledLastMessage = styled.div`
  color: rgb(117 117 117);
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  height: 20px;
  max-width: 200px;
`;

export default ThreadRef;
