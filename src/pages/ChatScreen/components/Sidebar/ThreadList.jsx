import styled from "styled-components";
import ThreadSearch from "./ThreadSearch";
import ThreadRef from "./ThreadRef";

import { useDispatch } from "react-redux";
import { changeThread } from "../../../../store/chat/slice";

import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const ThreadList = () => {
  const usersRef = firebase.firestore().collection("users");

  const [users] = useCollectionData(usersRef);

  const dispatch = useDispatch();

  return (
    <>
      <ThreadSearch />
      <StyledWrapper>
        {users?.map((user) => {
          if (user.uid !== firebase.auth().currentUser.uid)
            return (
              <ThreadRef
                displayName={user.displayName}
                photoURL={user.photoUrl}
                onClick={() => dispatch(changeThread(user.uid))}
              />
            );
        })}
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  overflow: auto;
  scrollbar-color: #6969dd #e0e0e0;
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 2px;
  }
`;

export default ThreadList;
