import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  hasError: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;

      state.hasError = null;
    },
    logout(state) {
      state.user = null;
    },
    setError(state) {
      state.hasError = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
