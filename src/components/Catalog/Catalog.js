import React, { useState, useEffect } from "react";

import { getAll } from "../../lib/api";
import { MovieCard } from "../MovieCard/MovieCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import tabTitle from "../../lib/tabTitle";

import styles from "./Catalog.module.css";

export const Catalog = () => {
  tabTitle("Catalog");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAll().then((result) => {
      if (movies.length < result.length) {
        setMovies(result);
      }
    });
  }, [movies]);

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
