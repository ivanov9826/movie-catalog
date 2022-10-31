import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/user-context";
import styles from "./Header.module.css";

export const Header = () => {
  const userCtx = useContext(UserContext);

  const onLogoutHandler = () => {
    userCtx.logout();
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
      {!userCtx.user.username && (
        <div>
          <Link to="/login" className={styles.links}>
            Login
          </Link>
        </div>
      )}
      {!userCtx.user.username && (
        <div>
          <Link to="/register" className={styles.links}>
            Register
          </Link>
        </div>
      )}
      {userCtx.user.username && (
        <div>
          <button onClick={onLogoutHandler}>Logout</button>
        </div>
      )}
    </div>
  );
};
