import Container from "../../../components/Container";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import googleIcon from "../../../icons/google.svg";
import Button from "../../../components/Button";

import firebase from "firebase";
import "firebase/auth";
// Utils
import { initUser } from "../../../store/user/slice";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInWithPopup(provider);
      // store user to the redux
      dispatch(initUser(firebase.auth().currentUser));
      // store user to user collection if the user is new
      const usersRef = firebase.firestore().collection("users");
      const query = usersRef.where(
        "uid",
        "==",
        firebase.auth().currentUser.uid
      );
      query.get().then((querySnapshot) => {
        if (!querySnapshot.docs.length) {
          usersRef.add({
            uid: firebase.auth().currentUser.uid,
            displayName: firebase.auth().currentUser.displayName,
            photoUrl: firebase.auth().currentUser.photoURL,
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <StyledContainer>
      <Button onClick={signInWithGoogle}>
        Sign in with
        <StyledImg src={googleIcon} width="25px" />
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StyledImg = styled.img`
  margin-left: 8px;
`;

export default LoginContainer;
