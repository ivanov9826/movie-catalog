import { createSlice } from "@reduxjs/toolkit";

initialState = {
  movies: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setAllMovies(state, action) {
      state.movies = action.payload;
    },
    addMovie(state, action) {},
    getOneMovie(state, action) {},
    removeMovie(state, action) {},
    editMovie(state, action) {},
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
