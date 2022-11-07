import styles from "./DeleteModal.module.css";
import { removeMovie } from "../../lib/api";
import { useNavigate } from "react-router-dom";

const DeleteModal = (props) => {
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    removeMovie(props.id);
    navigate("/catalog");
  };

  return (
    <div className={styles.overlay} onClick={props.onCancel}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <p>Are you sure you want to delete {props.movie}?</p>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={props.onCancel}>
            Cancel
          </button>
          <button className={styles.deleteBtn} onClick={onDeleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
