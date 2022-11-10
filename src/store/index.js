import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: { auth: authSlice, movies: movieSlice },
});

export default store;
