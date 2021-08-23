import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUser: (state, action) => {
      const { displayName, email, photoURL } = action.payload;
      state.displayName = displayName;
      state.email = email;
      state.photoURL = photoURL;
    },
    logout: (state) => {
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
    },
  },
});

export const { initUser, logout } = userSlice.actions;

export default userSlice.reducer;
