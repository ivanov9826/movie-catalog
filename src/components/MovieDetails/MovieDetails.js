import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/user-context";
import { getOne, removeMovie } from "../../lib/api";
import styles from "./MovieDetails.module.css";
import { NavLink } from "react-router-dom";
import tabTitle from "../../lib/tabTitle";

export const MovieDetails = () => {
  const { user } = useContext(UserContext);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  let isAuthor = false;
  tabTitle(movie.title);

  useEffect(() => {
    getOne(id).then((result) => {
      setMovie(result);
    });
  }, [id]);

  if (user === movie.addedBy) {
    isAuthor = true;
  }

  const onDeleteHandler = () => {
    removeMovie(id);
    navigate("/catalog");
  };

  return (
    <div className={styles.cardContent}>
      <img src={movie.poster} className={styles.img} alt="Movie Poster" />
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.director}>{movie.director}</p>
      <span className={styles.details}>{movie.details}</span>
      {isAuthor && (
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onDeleteHandler}>
            Delete
          </button>

          <NavLink to={`/edit-movie/${id}`} className={styles.link}>
            Edit
          </NavLink>
        </div>
      )}
    </div>
  );
};
