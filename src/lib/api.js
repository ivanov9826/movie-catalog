import { baseUrl, singleMovieUrl } from "../constants/baseUrl";

export const addMovie = async (movie) => {
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

export const getAll = async () => {
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

export const getOne = async (id) => {
  const response = await fetch(`${singleMovieUrl}${id}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch movie!");
  }

  return data;
};

export const removeMovie = (id) => {
  fetch(`${singleMovieUrl}${id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return null;
};

export const editMovie = async (id, movie) => {
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
