import styled from "styled-components";
import Icon from "../../../../components/Icon";

const Message = ({ children, isYours, photoURL }) => {
  return (
    <StyledWrapper>
      {isYours ? null : <Icon src={photoURL} width="50px" />}
      <StyledMessage isYours={isYours}>{children}</StyledMessage>
      {isYours ? <Icon src={photoURL} width="50px" /> : null}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 16px;
`;

const StyledMessage = styled.div`
  background-color: ${(props) =>
    props.isYours ? "rgb(52 171 255 / 28%)" : "white"};
  flex: 2;
  border-radius: 16px;
  margin-${(props) => (props.isYours ? "right" : "left")}: 16px;
  padding: 16px;
`;

export default Message;
