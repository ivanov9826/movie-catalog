import React, { useEffect } from "react";

import { getAllMovies } from "../../store/movieActions";
import { MovieCard } from "../MovieCard/MovieCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import tabTitle from "../../lib/tabTitle";

import styles from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";

export const Catalog = () => {
  tabTitle("Catalog");

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cardWrapper}>
        {movies.length < 1 && <LoadingSpinner />}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
