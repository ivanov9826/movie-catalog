import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { authActions } from "../../store/auth";
import styles from "./Header.module.css";

export const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <header className={styles.header}>
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
          {!user && (
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
          {!user && (
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
          {user && (
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
          {user && (
            <li>
              <span className={styles.username}>Welcome , {user}</span>
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
