import { useContext } from "react";
import UserContext from "../../context/user-context";
import styles from "./Login.module.css";
import useInput from "../../hooks/useInput";

export const Login = () => {
  const userCtx = useContext(UserContext);

  const isSixSymbols = (pass) => pass.length > 5;
  const isEmail = (email) => email.includes("@");

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

  const onSubmitHandler = (e) => {
    e.preventDefault();

    userCtx.login(emailValue, passValue);
  };

  return (
    <form id="login" onSubmit={onSubmitHandler}>
      <div className={styles.controlGroup}>
        <h1>Login</h1>
        {userCtx.hasError && (
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
        <p className="field">
          <span>
            If you already have profile click <a href="/login">here</a>
          </span>
        </p>
      </div>
    </form>
  );
};
