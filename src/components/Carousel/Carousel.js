import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import sortingMovies from "../../lib/sortingMovies";

const Carousel = (props) => {
  const [slidesCount, setSlidesCount] = useState(1);
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    if (props.movies.length < 5) {
      setSlidesCount(props.movies.length);
    } else {
      setSlidesCount(5);
    }
  }, [props.movies.length]);

  useEffect(() => {
    const arrForSort = [...props.movies];
    const srtArr = sortingMovies(arrForSort);
    setSortedMovies(srtArr);
  }, [props.movies]);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: slidesCount,
    slidesToScroll: slidesCount,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <h2>Latest Movies</h2>
      <Slider {...settings} className={styles.slider}>
        {sortedMovies.map((movie) => {
          return (
            <div key={movie.id} className={styles.slide}>
              <Link to={`/catalog/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} />
                <div className={styles.content}>
                  <p>{movie.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
