import { useRef, useEffect, useState } from "react";
import styles from "./MovieEditForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { updateMovie, getOne } from "../../lib/api";
import tabTitle from "../../lib/tabTitle";

export const MovieEditForm = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  tabTitle("Edit");

  const navigate = useNavigate();

  const titleInputRef = useRef();
  const directorInputRef = useRef();
  const posterInputRef = useRef();
  const detailsInputRef = useRef();

  useEffect(() => {
    getOne(id).then((result) => {
      setMovie(result);
    });
  }, [id]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const titleInputValue = titleInputRef.current.value;
    const directorInputValue = directorInputRef.current.value;
    const posterInputValue = posterInputRef.current.value;
    const detailsInputValue = detailsInputRef.current.value;
    const newMovie = {
      title: titleInputValue,
      director: directorInputValue,
      poster: posterInputValue,
      details: detailsInputValue,
      dateAdded: new Date(),
    };

    try {
      updateMovie(id, newMovie);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.controlGroup}>
        <h1>Edit Movie</h1>
        <div className={styles.formControl}>
          <label>Movie Title:</label>
          <input
            type="text"
            minLength="2"
            ref={titleInputRef}
            defaultValue={movie.title}
          />
        </div>
        <div className={styles.formControl}>
          <label>Director:</label>
          <input
            type="text"
            minLength="3"
            ref={directorInputRef}
            defaultValue={movie.director}
          />
        </div>
        <div className={styles.formControl}>
          <label>Poster:</label>
          <input type="url" ref={posterInputRef} defaultValue={movie.poster} />
        </div>
        <div className={styles.formControl}>
          <label>Details:</label>
          <textarea
            type="text"
            rows="6"
            ref={detailsInputRef}
            defaultValue={movie.details}
          />
        </div>
        <div className={styles.formActions}>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
};
