import useMutation from "../../hooks/useMutation";
import { useSocketContext } from "../../socket-context/socketContext";
import { logout } from "../auth/service";
import ConfirmationButton from "./ConfirmationButton";

const LogoutButton = () => {
  const mutation = useMutation(logout);
  const socket = useSocketContext().socket;

  const handleLogoutConfirm = async () => {
    const userLoggedOutId = await mutation.execute();

    socket.emit("userLogout", { userId: userLoggedOutId });
    logout();

    // Cambiar esto
    window.location.href = "http://localhost:8080/";
  };

  return (
    <ConfirmationButton
      className="cursor-pointer py-[12px] px-[20px] bg-transparent hover:bg-red-500 border border-1 border-[#607d8b] text-[.875rem] text-[#607d8b] hover:text-white rounded-[25px] inline-block text-center whitespace-nowrap"
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Cerrar sesión
    </ConfirmationButton>
  );
};

export default LogoutButton;
