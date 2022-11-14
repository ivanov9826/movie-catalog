import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import useInput from "../../hooks/useInput";
import tabTitle from "../../lib/tabTitle";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authActions";
import { useEffect } from "react";

const isSixSymbols = (pass) => pass.length > 5;
const isEmail = (email) => email.includes("@");

export const Login = () => {
  tabTitle("Login");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    value: emailValue,
    hasError: emailHasError,
    setInputValueHandler: setEmailValueHandler,
    onBlurHandler: onEmailBlurHandler,
  } = useInput(isEmail);

  const {
    value: passValue,
    hasError: passHasError,
    setInputValueHandler: setPassValueHandler,
    onBlurHandler: onPassBlurHandler,
  } = useInput(isSixSymbols);

  const hasError = useSelector((state) => state.auth.hasError);
  const username = useSelector((state) => state.auth.user);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(login(emailValue, passValue));
  };

  useEffect(() => {
    if (username != null) {
      navigate("/");
    }
  }, [username, navigate]);

  return (
    <form id="login" onSubmit={onSubmitHandler}>
      <div className={styles.controlGroup}>
        <h1>Login</h1>
        {hasError && (
          <p className={styles.errorText}>Wrong username or password!</p>
        )}
        <div className={styles.formControl}>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            onChange={setEmailValueHandler}
            onBlur={onEmailBlurHandler}
            value={emailValue}
          />
          {emailHasError && (
            <p className={styles.errorText}>Please enter a valid email!</p>
          )}
        </div>
        <div className={styles.formControl}>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            onChange={setPassValueHandler}
            onBlur={onPassBlurHandler}
            value={passValue}
          />
          {passHasError && (
            <p className={styles.errorText}>
              Please enter a valid password!(Six symbols or more)
            </p>
          )}
        </div>
        <div className={styles.formActions}>
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>

        <Link to="/register" className={styles.link}>
          If you dont have a profile click here
        </Link>
      </div>
    </form>
  );
};
