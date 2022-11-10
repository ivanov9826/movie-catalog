import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  selectedMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setAllMovies(state, action) {
      state.movies = action.payload;
    },
    setMovieDetails(state, action) {
      state.selectedMovie = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
