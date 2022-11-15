import { useRef } from "react";
import styles from "./MovieForm.module.css";
import { useNavigate } from "react-router-dom";

import tabTitle from "../../lib/tabTitle";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../store/movieActions";

export const MovieForm = () => {
  tabTitle("Add Movie");

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const titleInputRef = useRef();
  const directorInputRef = useRef();
  const posterInputRef = useRef();
  const detailsInputRef = useRef();

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
      addedBy: user,
    };
    try {
      dispatch(addMovie(newMovie));
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.controlGroup}>
        <h1>Add Movie</h1>
        <div className={styles.formControl}>
          <label>Movie Title:</label>
          <input
            type="text"
            minLength="2"
            placeholder="The Shawshank Redemption"
            ref={titleInputRef}
          />
        </div>
        <div className={styles.formControl}>
          <label>Director:</label>
          <input
            type="text"
            minLength="3"
            placeholder="Frank Darabont"
            ref={directorInputRef}
          />
        </div>
        <div className={styles.formControl}>
          <label>Poster:</label>
          <input type="url" placeholder="URL..." ref={posterInputRef} />
        </div>
        <div className={styles.formControl}>
          <label>Details:</label>
          <textarea
            type="text"
            placeholder="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
            rows="6"
            ref={detailsInputRef}
          />
        </div>
        <div className={styles.formActions}>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};
