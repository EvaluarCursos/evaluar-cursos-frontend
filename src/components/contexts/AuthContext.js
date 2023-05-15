import { createContext } from "react";

const AuthContext = createContext({
  userId: null,
  role: null,
  email: null,
  setData: (data) => {},
});

export default AuthContext;
