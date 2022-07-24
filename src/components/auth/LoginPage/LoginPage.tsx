import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuthContext } from "../context";
import { login } from "../service";
import LoginForm from "./LoginForm";
import useMutation from "../../../hooks/useMutation";
// import { useSocketContext } from "../../../socket-context/socketContext";
import socket from '../../../socket-context/socketContext';

import storage from "../../../utils/storage";
import { parseJwt } from "../../../utils/utils";
import { Toaster, toast } from "react-hot-toast";
import Spinner from "../../spinner/Spinner";
import LoaderStyles from "../../../styles/LoaderStyles";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useAuthContext();
  const { isLoading, error, execute, resetError } = useMutation(login);
  // const socket = useSocketContext().socket.current;
  const handleSubmit = (credentials) => {
    execute(credentials)
      .then(handleLogin)
      .then(() => {
        const from = location.state?.["from"]?.pathname || "/";
        navigate(from, { replace: true });
        const auth = storage.get("auth") || storage.getSession("auth");
        const jwtToken = auth?.replace('"', "");
        const userId = parseJwt<{ _id?: string }>(jwtToken)?._id;
        socket.emit("login", { userId });
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <LoginForm onSubmit={handleSubmit} />
      {isLoading && (
        <div className={LoaderStyles.spinnerWrapper}>
          <Spinner />
        </div>
      )}
      {error && (
        <div onClick={resetError}>{toast.error("¡Usuario no autorizado!")}</div>
      )}
    </>
  );
}

export default LoginPage;
