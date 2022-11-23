import { Link } from "react-router-dom";
import styles from "./FeaturedMovie.module.css";

const FeaturedMovie = ({ movie }) => {
  return (
    <div className={styles.featuredWrapper}>
      <div className={styles.textWrapper}>
        <h2>Featured Movie</h2>
      </div>
      <Link to={`/catalog/${movie.id}`}>
        <div className={styles.backgroundWrapper}>
          <img src={movie.poster} alt="featured movie poster" />
        </div>
        <div>
          <div className={styles.contentWrapper}>
            <img src={movie.poster} alt="featured movie poster" />
            <h3>{movie.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedMovie;
