import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
    <header className={styles.header}>
      <div className={styles.logo}>Movie Catalog</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#5b4985" : "white",
                };
              }}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#5b4985" : "white",
                };
              }}
            >
              Catalog
            </NavLink>
          </li>
          {!username && (
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#5b4985" : "white",
                  };
                }}
              >
                Login
              </NavLink>
            </li>
          )}
          {!username && (
            <li>
              <NavLink
                to="/register"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#5b4985" : "white",
                  };
                }}
              >
                Register
              </NavLink>
            </li>
          )}
          {username && (
            <li>
              <NavLink
                to="/add-movie"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#5b4985" : "white",
                  };
                }}
              >
                Add Movie
              </NavLink>
            </li>
          )}
          {username && (
            <li>
              <span className={styles.username}>Welcome , {username}</span>
              <button onClick={onLogoutHandler} className={styles.button}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
