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

export const getOneMovie = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${singleMovieUrl}${id}.json`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch movie!");
      }

      dispatch(movieActions.setMovieDetails(data));
    } catch (error) {}
  };
};

export const addMovie = (movie) => {
  return async (dispatch) => {
    const sendPostRequest = async () => {
      const response = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not add movie!");
      }

      return null;
    };

    try {
      sendPostRequest();

      dispatch(getAllMovies());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editMovie = (id, movie) => {
  return async (dispatch) => {
    const sendEditRequest = async () => {
      const response = await fetch(`${singleMovieUrl}${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not add movie!");
      }

      return null;
    };

    try {
      sendEditRequest();
    } catch (error) {}
  };
};

export const deleteMovie = (id) => {
  return async (dispatch) => {
    const sendDeleteRequest = async () => {
      fetch(`${singleMovieUrl}${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return null;
    };

    try {
      sendDeleteRequest();

      dispatch(getAllMovies());
    } catch (error) {
      console.log(error);
    }
  };
};
