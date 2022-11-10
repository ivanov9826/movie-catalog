import { authActions } from "./authSlice";
import { loginUrl, regUrl } from "../constants/baseUrl";
import usernameNormalizer from "./usernameNormalizer";

export const login = (email, password) => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      const response = await fetch(loginUrl, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Wrong Email or Password!");
      }
      const data = await response.json();

      return data;
    };

    try {
      const dbResponse = await sendLoginRequest();

      const userEmail = dbResponse.email;

      const username = usernameNormalizer(userEmail);

      dispatch(authActions.userLogin(username));
    } catch (error) {
      dispatch(authActions.setError());
    }
  };
};

export const register = (email, password) => {
  return async (dispatch) => {
    const sendRegRequest = async () => {
      const response = await fetch(regUrl, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    };
    try {
      const dbResponse = await sendRegRequest();
      const userEmail = dbResponse.email;

      const username = usernameNormalizer(userEmail);

      dispatch(authActions.userLogin(username));
    } catch (error) {
      console.log(error);
    }
  };
};
