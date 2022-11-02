import styles from "./Register.module.css";

import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/user-context";

export const Register = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const isSixSymbols = (pass) => pass.length > 5;
  const isEmail = (email) => email.includes("@");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    setInputValueHandler: setEmailValueHandler,
    onBlurHandler: onEmailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    setInputValueHandler: setPassValueHandler,
    onBlurHandler: onPassBlurHandler,
    reset: passReset,
  } = useInput(isSixSymbols);

  const {
    value: confirmPassValue,
    isValid: confirmPassIsValid,
    hasError: confirmPassHasError,
    setInputValueHandler: setConfirmPassValueHandler,
    onBlurHandler: onConfirmPassBlurHandler,
    reset: confirmPassReset,
  } = useInput((value) => value === passValue && value.length !== 0);

  let formIsValid = false;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    userCtx.register(emailValue, passValue);

    emailReset();
    passReset();
    confirmPassReset();

    navigate("/");
  };

  if (emailIsValid && passIsValid && confirmPassIsValid) {
    formIsValid = true;
  }

  return (
    <form id="register" onSubmit={onSubmitHandler}>
      <div className={styles.controlGroup}>
        <h1>Register</h1>
        <div className={styles.formControl}>
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="pass">Password:</label>
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
        <div className={styles.formControl}>
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={setConfirmPassValueHandler}
            onBlur={onConfirmPassBlurHandler}
            value={confirmPassValue}
          />
          {confirmPassHasError && (
            <p className={styles.errorText}>Passwords must match!</p>
          )}
        </div>
        <div className={styles.formActions}>
          <button type="submit" disabled={!formIsValid}>
            Register
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
