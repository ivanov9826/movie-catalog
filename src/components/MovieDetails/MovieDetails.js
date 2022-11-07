import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/user-context";
import { getOne } from "../../lib/api";
import styles from "./MovieDetails.module.css";
import { NavLink } from "react-router-dom";
import tabTitle from "../../lib/tabTitle";
import DeleteModal from "../MovieCreate/DeleteModal";

export const MovieDetails = () => {
  const { user } = useContext(UserContext);
  const [movie, setMovie] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);

  const { id } = useParams();

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

  const openDeletePrompt = () => {
    setIsDeleting(true);
  };

  const closeDeletePrompt = () => {
    setIsDeleting(false);
  };

  return (
    <>
      {isDeleting && (
        <DeleteModal movie={movie.title} onCancel={closeDeletePrompt} id={id} />
      )}
      <div className={styles.cardContent}>
        <img src={movie.poster} className={styles.img} alt="Movie Poster" />
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.director}>{movie.director}</p>
        <span className={styles.details}>{movie.details}</span>
        {isAuthor && (
          <div className={styles.buttons}>
            <button className={styles.button} onClick={openDeletePrompt}>
              Delete
            </button>

            <NavLink to={`/edit-movie/${id}`} className={styles.link}>
              Edit
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};
