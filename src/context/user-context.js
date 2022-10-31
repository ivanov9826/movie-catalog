import React from "react";

const UserContext = React.createContext({
  user: {},
  login: () => {},
  register: () => {},
  logout: () => {},
});

export default UserContext;
