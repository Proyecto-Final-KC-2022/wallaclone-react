import { NavLink } from "react-router-dom";
import { useAuthContext } from "../auth/context";
import AccountButton from "./AccountButton";
const style = {
  loginButtonWrapper:
    "flex w-full min-w-[200px] items-center justify-center text-center bg-white hover:bg-[#13c1ac] rounded-[21px] border border-[#13c1ac] px-2 mr-2 h-[42px] text-[#13c1ac] hover:text-white",
  loginText: "flex text-center items-center text-[.875rem]",
};

const LoginButton = () => {
  const { isLogged } = useAuthContext();

  return !isLogged ? (
    <NavLink to="/login">
      <button className={style.loginButtonWrapper}>
        <span className={style.loginText}>Regístrate o inicia sesión</span>
      </button>
    </NavLink>
  ) : (
    <AccountButton />
  );
};

export default LoginButton;
