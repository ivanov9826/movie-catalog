import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  return (
    <div className={styles.cardContent}>
      <img className={styles.img} src={movie.poster} alt="Movie Poster" />
      <h2 className={styles.title}>{movie.title}</h2>
      <Link to={`/catalog/${movie.id}`} className={styles.detailsButton}>
        Details
      </Link>
    </div>
  );
};
