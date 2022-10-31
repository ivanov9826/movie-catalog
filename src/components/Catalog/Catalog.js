import { useEffect, useState } from "react";
import { getAll } from "../../services/getAll";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./Catalog.module.css";

export const Catalog = () => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //     getAll()
  //         .then(result => {
  //             setMovies(result)
  //         })
  // }, [])

  return (
    <div>
      <h1 className={styles.catalogHeader}>Catalog</h1>
      <div className={styles.cardWrapper}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
