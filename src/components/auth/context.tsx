import { any } from 'prop-types';
import React from 'react';

const AuthContext = React.createContext({handleLogin?:any});

export const useAuthContext = () => {
  const authValue = React.useContext(AuthContext);
  return authValue;
};

export const AuthProvider = ({ children, ...props }) => (
  <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
);

export const AuthConsumer = AuthContext.Consumer;


export default AuthContext;
