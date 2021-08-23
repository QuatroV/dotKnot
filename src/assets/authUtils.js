import firebase from "firebase";
import "firebase/auth";

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    console.log(error.message);
  }
};
