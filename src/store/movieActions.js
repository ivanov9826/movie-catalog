import { movieActions } from "./movieSlice";
import { baseUrl, singleMovieUrl } from "../constants/baseUrl";

export const getAllMovies = () => {
  return async (dispatch) => {
    const getAllRequest = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch movies!");
      }

      const transformedMovies = [];

      for (const key in data) {
        const movieObj = {
          id: key,
          ...data[key],
        };
        transformedMovies.push(movieObj);
      }

      return transformedMovies;
    };

    try {
      const movies = await getAllRequest();

      dispatch(movieActions.setAllMovies(movies));
    } catch (error) {
      console.log(error);
    }
  };
};
