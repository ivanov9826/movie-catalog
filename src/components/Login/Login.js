import { useContext } from "react";
import UserContext from "../../context/user-context";
import styles from "./Login.module.css";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

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

  let formIsValid = false;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    userCtx.login(emailValue, passValue);

    emailReset();
    passReset();

    navigate("/");
  };

  if (emailIsValid && passIsValid) {
    formIsValid = true;
  }

  return (
    <form id="register" onSubmit={onSubmitHandler}>
      <div className={styles.container}>
        <h1>Register</h1>
        <div>
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
        <div>
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

        <button className="btn submit" type="submit" disabled={!formIsValid}>
          Login
        </button>

        <p className="field">
          <span>
            If you already have profile click <a href="/login">here</a>
          </span>
        </p>
      </div>
    </form>
  );
};
