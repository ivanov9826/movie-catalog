import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./MovieDetails.module.css";
import { NavLink } from "react-router-dom";
import tabTitle from "../../lib/tabTitle";
import DeleteModal from "../MovieCreate/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { getOneMovie } from "../../store/movieActions";

export const MovieDetails = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [isAuthor, setIsAuthor] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { id } = useParams();

  const movie = useSelector((state) => state.movies.selectedMovie);

  useEffect(() => {
    dispatch(getOneMovie(id));
    if (user === movie.addedBy) {
      setIsAuthor(true);
    }
  }, [user, movie.addedBy, dispatch, id]);

  tabTitle(movie.title);

  const openDeletePrompt = () => {
    setIsDeleting(true);
  };

  const closeDeletePrompt = () => {
    setIsDeleting(false);
  };

  return (
    <div className={styles.mainContainer}>
      {isDeleting && (
        <DeleteModal movie={movie.title} onCancel={closeDeletePrompt} id={id} />
      )}
      <div className={styles.movieContainer}>
        <img src={movie.poster} className={styles.img} alt="Movie Poster" />
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.director}>Director : {movie.director}</p>
        <p className={styles.details}>{movie.details}</p>
        {isAuthor && (
          <div className={styles.buttons}>
            <button
              className={styles.buttons__delete}
              onClick={openDeletePrompt}
            >
              Delete
            </button>

            <NavLink to={`/edit-movie/${id}`} className={styles.buttons__edit}>
              Edit
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
