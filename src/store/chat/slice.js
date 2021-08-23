import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  threadId: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeThread: (state, action) => {
      state.threadId = action.payload;
    },
  },
});

export const { changeThread } = chatSlice.actions;

export default chatSlice.reducer;
