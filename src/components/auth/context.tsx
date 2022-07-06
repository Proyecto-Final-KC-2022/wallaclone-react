import React from "react";

export type AuthContextType = {
  isLogged: boolean;
  handleSignup: () => void;
  handleLogout: () => void;
  handleLogin: () => void;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const authValue = React.useContext(AuthContext);
  return authValue;
};

export const AuthProvider = ({ children, ...props }) => (
  <AuthContext.Provider value={props as AuthContextType}>
    {children}
  </AuthContext.Provider>
);

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
