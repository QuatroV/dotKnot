import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  width: 100%;
  line-height: 50px;
  border: 0;
  text-decoration: none;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgb(0 0 0 / 59%);
  backdrop-filter: blur(30px);
  font-size: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    position: relative;
    top: 1px;
  }
  :hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24);
  }
`;

export default Button;
