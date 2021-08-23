import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import ChatScreen from "./ChatScreen/ChatScreen";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state.user);
  return <>{user.email ? <ChatScreen /> : <LoginScreen />}</>;
};

export default Router;
