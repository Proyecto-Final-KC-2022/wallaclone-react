import useMutation from "../../hooks/useMutation";
// import { useSocketContext } from "../../socket-context/socketContext";
import socket from '../../socket-context/socketContext';

import { logout } from "../auth/service";
import ConfirmationButton from "./ConfirmationButton";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutButtonStyles from "../../styles/LogoutButtonStyles";

const LogoutButton = () => {
  const mutation = useMutation(logout);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogoutConfirm = async () => {
    const userLoggedOutId = await mutation.execute();

    socket.emit("userLogout", { userId: userLoggedOutId });
    logout();
    const from = location.state?.["from"]?.pathname || "/";
    const refreshPage = () => {
      navigate(0);
    }
    navigate(from, { replace: true });

    // Si no se hace refresh entiende que sigue estando logueado y muestra el perfil en home
    
    refreshPage()
  };

  return (
    <ConfirmationButton
      className={LogoutButtonStyles.logoutButton}
      confirmation='Are you sure?'
      onConfirm={handleLogoutConfirm}
    >
      Cerrar sesión
    </ConfirmationButton>
  );
};

export default LogoutButton;
