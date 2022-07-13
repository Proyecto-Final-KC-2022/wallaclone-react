import useMutation from "../../hooks/useMutation";
import { logout } from "../auth/service";
import ConfirmationButton from "./ConfirmationButton";

const LogoutButton = () => {
  const mutation = useMutation(logout);

  const handleLogoutConfirm = async () => {
    await mutation.execute();
    logout();

    // Cambiar esto
    window.location.href = 'http://localhost:8080/'; 
  };

  return (
    <ConfirmationButton className="cursor-pointer py-[12px] px-[20px] bg-transparent hover:bg-red-500 border border-1 border-[#607d8b] text-[.875rem] text-[#607d8b] hover:text-white rounded-[25px] inline-block text-center whitespace-nowrap"
    confirmation="Are you sure?"
    onConfirm={handleLogoutConfirm} >
      Cerrar sesión
    </ConfirmationButton>
  )
}

export default LogoutButton