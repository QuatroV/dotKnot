import React, { useState } from "react";
import styled from "styled-components";

//Components
import Icon from "../../../../components/Icon";
import HeaderDropdown from "./HeaderDropdown";

//Utils
import { useSelector } from "react-redux";

const SidebarHeader = () => {
  const displayName = useSelector((state) => state.user.displayName);
  const photoURL = useSelector((state) => state.user.photoURL);

  const [showDropdown, setDropdown] = useState(false);

  return (
    <>
      <StyledWrapper onClick={() => setDropdown(!showDropdown)}>
        <Icon src={photoURL} width="50px" />
        <StyledText>{displayName}</StyledText>
      </StyledWrapper>
      {showDropdown ? <HeaderDropdown /> : null}
    </>
  );
};

const StyledWrapper = styled.div`
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
  cursor: pointer;
  border-radius: 16px 0px 0px;
  padding: 16px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
`;

const StyledText = styled.span`
  margin-left: 8px;
`;

export default SidebarHeader;
