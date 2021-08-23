import React from "react";
import styled from "styled-components";
import SidebarHeader from "./SidebarHeader";
import ThreadList from "./ThreadList";

const Sidebar = ({ children }) => {
  return (
    <StyledSidebar>
      <SidebarHeader />
      {children}
      <ThreadList />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px 0px 0px 16px;
  padding: 0px;

  display: flex;
  flex-direction: column;
`;

export default Sidebar;
