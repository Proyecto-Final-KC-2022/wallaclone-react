import { Link } from 'react-router-dom';
import AccountButton from './AccountButton';
const style = {
  loginButtonWrapper: "flex w-full min-w-[200px] items-center justify-center text-center bg-white hover:bg-[#13c1ac] rounded-[21px] border border-[#13c1ac] px-2 mr-2 h-[42px] text-[#13c1ac] hover:text-white",
  loginText: "flex text-center items-center text-[.875rem]"
}

const LoginButton = ({ isLogged }) => {

  return isLogged ? (
    <button className={style.loginButtonWrapper}>
      <span className={style.loginText}>Regístrate o inicia sesión</span>
    </button>
  ) : (
    <Link to="/account">
      <AccountButton />
    </Link>
  )
}

export default LoginButton