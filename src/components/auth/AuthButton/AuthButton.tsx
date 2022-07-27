import { Link } from "react-router-dom";

import { AuthConsumer } from "../context";
import { logout } from "../service";
import useMutation from "../../../hooks/useMutation";
import AccountButton from "../../common/AccountButton";
import AuthButtonStyles from "../../../styles/AuthButtonStyles";

const AuthButton = ({ handleLogout, isLogged }) => {
  const mutation = useMutation(logout);

  return isLogged ? (
    <AccountButton />
  ) : (
    <Link to="/login">
      <button className={AuthButtonStyles.authButton}>
        <span className={AuthButtonStyles.authSpan}>
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
