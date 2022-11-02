import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUrl, regUrl } from "../constants/baseUrl";
import usernameNormalizer from "./normalize-username";
import UserContext from "./user-context";

const UserProvider = (props) => {
  const [user, setUser] = useState("");
  const [hasError, setHasError] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
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
        setHasError(true);
        throw new Error("Wrong Email or Password!");
      }
      const data = await response.json();
      setUser(usernameNormalizer(data));
      setHasError(false);
      navigate("/");
    } catch (error) {}
  };

  const register = async (email, password) => {
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
    setUser(usernameNormalizer(data));
  };

  const logout = () => {
    setUser("");
  };

  const userContext = {
    user,
    login,
    register,
    logout,
    hasError,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
