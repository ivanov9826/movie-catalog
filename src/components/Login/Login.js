import { useContext } from "react";
import UserContext from "../../context/user-context";
import styles from "./Login.module.css";
import useInput from "../../hooks/useInput";

import { useEffect } from "react";

export const Login = () => {
  const userCtx = useContext(UserContext);

  const isSixSymbols = (pass) => pass.length > 5;
  const isEmail = (email) => email.includes("@");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    setInputValueHandler: setEmailValueHandler,
    onBlurHandler: onEmailBlurHandler,
  } = useInput(isEmail);

  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    setInputValueHandler: setPassValueHandler,
    onBlurHandler: onPassBlurHandler,
  } = useInput(isSixSymbols);

  let formIsValid = false;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      userCtx.login(emailValue, passValue);
    } catch (error) {
      console.log(error);
    }

    //Add error handling
  };

  if (emailIsValid && passIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <form id="login" onSubmit={onSubmitHandler}>
      <div className={styles.controlGroup}>
        <h1>Login</h1>
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
          <button
            className={styles.button}
            type="submit"
            disabled={!formIsValid}
          >
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
