import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import firebase from "firebase";

import logoutIcon from "../../../../icons/logout.svg";
import { logout } from "../../../../store/user/slice";

const HeaderDropdown = () => {
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <StyledWrapper>
      <StyledOption onClick={signOut}>
        <StylegImg src={logoutIcon} alt="" height="20px" />
        Sign Out
      </StyledOption>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #80808024;
`;

const StyledOption = styled.div`
  line-height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StylegImg = styled.img`
  margin: 0px 16px;
`;

export default HeaderDropdown;
