import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  return (
    <div className={styles.cardContent}>
      <img
        className={styles.img}
        src={movie.poster}
        width={"auto"}
        height={200}
        alt="Movie Poster"
      />
      <h2 className={styles.names}>{movie.title}</h2>
      <h5 className={styles.names}>{movie.director}</h5>
      <Link to={`/catalog/${movie.id}`} className={styles.detailsButton}>
        Details
      </Link>
    </div>
  );
};
