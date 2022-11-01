import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/user-context";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const username = userCtx.user || null;

  const onLogoutHandler = () => {
    userCtx.logout();
    navigate("/");
  };

  return (
    <div className={styles.headerWrapper}>
      <div>
        <Link to="/" className={styles.links}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/catalog" className={styles.links}>
          Catalog
        </Link>
      </div>
      {!username && (
        <div>
          <Link to="/login" className={styles.links}>
            Login
          </Link>
        </div>
      )}
      {!username && (
        <div>
          <Link to="/register" className={styles.links}>
            Register
          </Link>
        </div>
      )}
      {username && (
        <div>
          <Link to="/add-movie" className={styles.links}>
            Add Movie
          </Link>
        </div>
      )}
      {username && (
        <div>
          <span className={styles.username}>Welcome , {username}</span>
          <button onClick={onLogoutHandler} className={styles.button}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
