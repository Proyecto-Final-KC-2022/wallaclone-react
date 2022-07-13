import { Link } from "react-router-dom";

import { ConfirmationButton } from "../../common";
import { AuthConsumer } from "../context";
import { logout } from "../service";
import useMutation from "../../../hooks/useMutation";
import AccountButton from "../../common/AccountButton";

const AuthButton = ({ handleLogout, isLogged }) => {
  const mutation = useMutation(logout);

  const handleLogoutConfirm = async () => {
    await mutation.execute();
    handleLogout();
  };

  return isLogged ? (
    <AccountButton />
  ) : (
    <Link to="/login">
      <button className="flex w-full min-w-[200px] items-center justify-center text-center bg-white hover:bg-[#13c1ac] rounded-[21px] border border-[#13c1ac] px-2 mr-2 h-[42px] text-[#13c1ac] hover:text-white">
        <span className="flex text-center items-center text-[.875rem]">
          Regístrate o inicia sesión
        </span>
      </button>
    </Link>
  );
};

const ConnectedAuthButton = (props) => (
  <AuthConsumer>{(auth) => <AuthButton {...auth} {...props} />}</AuthConsumer>
);

export default ConnectedAuthButton;
