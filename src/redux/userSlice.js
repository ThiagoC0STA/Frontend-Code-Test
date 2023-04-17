import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    login(state, { payload }) {
      return {
        ...state,
        name: payload,
      };
    },
    logout(state) {
      return { ...state, name: "" };
    },
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;
