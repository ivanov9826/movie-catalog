import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tabTitle from "../../lib/tabTitle";
import randomInteger from "../../lib/randomGen";
import styles from "./Home.module.css";
import { getAllMovies } from "../../store/movieActions";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

export const Home = () => {
  tabTitle("Home");
  const [featuredMovie, setFeaturedMovie] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    const randomNumber = randomInteger(0, movies.length - 1);
    const randomMovie = movies[randomNumber];
    if (randomMovie === undefined) {
      return;
    }
    setFeaturedMovie(randomMovie);
  }, [movies]);

  return (
    <>
      <div className={styles.featuredWrapper}>
        <div className={styles.textWrapper}>
          <h2>Featured Movie:</h2>
        </div>
        <div className={styles.contentWrapper}>
          <img src={featuredMovie.poster} alt="featured movie poster" />
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <Carousel movies={movies} />
      </div>
    </>
  );
};
