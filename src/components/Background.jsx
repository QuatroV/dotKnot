import styled from "styled-components";
import backgroundImage from "../icons/background.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-attachment: fixed;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

export default Background;
