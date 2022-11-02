import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/user-context";
import { getOne, removeMovie } from "../../lib/api";
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { user } = useContext(UserContext);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  let isAuthor = false;

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
      <img src={movie.poster} height="360" width="360" alt="Movie Poster" />
      <h2 className={styles.name}>{movie.title}</h2>
      <p className={styles.name}>{movie.director}</p>
      <span className={styles.name}>{movie.details}</span>
      {isAuthor && (
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onDeleteHandler}>
            Delete
          </button>
          <button className={styles.button}>Edit</button>
        </div>
      )}
    </div>
  );
};
