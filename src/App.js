import Background from "./components/Background";
import Router from "./pages/Router";

import { store } from "./store/store";
import { Provider, useSelector } from "react-redux";

import firebase from "firebase/app";
import admin from "firebase-admin";

firebase.initializeApp({
  apiKey: "AIzaSyCuLiA49rPaUi1kl3kiYrc4ZBzuuE4IPbA",
  authDomain: "dotknot-2279a.firebaseapp.com",
  projectId: "dotknot-2279a",
  storageBucket: "dotknot-2279a.appspot.com",
  messagingSenderId: "924108901858",
  appId: "1:924108901858:web:1b167e553a50ae66197dbb",
  measurementId: "G-C9QQ00E3W0",
});

// admin.initializeApp();

const App = () => {
  return (
    <Provider store={store}>
      <Background>
        <Router />
      </Background>
    </Provider>
  );
};

export default App;
