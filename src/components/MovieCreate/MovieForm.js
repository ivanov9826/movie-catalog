import { useRef } from "react";
import styles from "./MovieForm.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/user-context";
import { addMovie } from "../../lib/api";

export const MovieForm = () => {
  const userCtx = useContext(UserContext);
  const username = userCtx.user.username;

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
      addedBy: username,
    };
    try {
      addMovie(newMovie);
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
          <input
            type="url"
            placeholder="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
            ref={posterInputRef}
          />
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
