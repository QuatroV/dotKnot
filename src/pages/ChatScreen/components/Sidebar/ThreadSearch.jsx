import styled from "styled-components";
import searchIcon from "../../../../icons/search.svg";
import InputField from "../../../../components/InputField";

const ThreadSearch = () => {
  return (
    <StyledWrapper>
      <StyledInput placeholder={"Search threads"} />
      <SearchButton src={searchIcon} alt="" height="20px" />
    </StyledWrapper>
  );
};

const StyledInput = styled(InputField)`
  flex: 2;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  position: sticky;
`;

const SearchButton = styled.img`
  margin-left: 16px;
  cursor: pointer;
`;

export default ThreadSearch;
