import styles from "./Register.module.css";

import useInput from "../../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../store/authActions";
import { useEffect } from "react";
import tabTitle from "../../lib/tabTitle";

const isSixSymbols = (pass) => pass.length > 5;
const isEmail = (email) => email.includes("@");

export const Register = () => {
  tabTitle("Register");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formIsValid, setFormIsValid] = useState(false);

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

  const {
    value: confirmPassValue,
    isValid: confirmPassIsValid,
    hasError: confirmPassHasError,
    setInputValueHandler: setConfirmPassValueHandler,
    onBlurHandler: onConfirmPassBlurHandler,
  } = useInput((value) => value === passValue && value.length !== 0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    dispatch(register(emailValue, passValue));

    navigate("/");
  };

  useEffect(() => {
    if (emailIsValid && passIsValid && confirmPassIsValid) {
      setFormIsValid(true);
    }
  }, [emailIsValid, passIsValid, confirmPassIsValid]);

  return (
    <form
      id="register"
      onSubmit={onSubmitHandler}
      className={styles.mainContainer}
    >
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
          <Link to="/register" className={styles.link}>
            If you already have a profile click here
          </Link>
        </p>
      </div>
    </form>
  );
};
