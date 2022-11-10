import React, { useEffect } from "react";

import { getAll } from "../../lib/api";
import { MovieCard } from "../MovieCard/MovieCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import tabTitle from "../../lib/tabTitle";

import styles from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";

export const Catalog = () => {
  tabTitle("Catalog");

  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div>
      <h1 className={styles.catalogHeader}>Catalog</h1>
      <div className={styles.cardWrapper}>
        {movies.length < 1 && <LoadingSpinner />}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
