import { useState } from "react";

import { loginUrl, regUrl } from "../constants/baseUrl";
import UserContext from "./user-context";

const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const login = async (email, password) => {
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
    const data = await response.json();
    setUser({
      username: data.email.split("@")[0],
      idToken: data.idToken,
    });
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
    setUser({
      username: data.email.split("@")[0],
      idToken: data.idToken,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const userContext = {
    user,
    login,
    register,
    logout,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
