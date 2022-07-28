import { Link } from "react-router-dom";

import { GrClose } from "react-icons/gr";

import T from "prop-types";

import useForm from "../../../hooks/useForm";
import LoginFormStyles from "../../../styles/LoginFormStyles";

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: "",
    password: "",
    remember: false,
  });
  const { email, password, remember } = credentials;

  return (
    <div className={LoginFormStyles.loginFormWrapper}>
      <div className={LoginFormStyles.loginFormContainer}>
        <div className={LoginFormStyles.closeContainer}>
          <Link to="/">
            <GrClose />
          </Link>
        </div>
        <h1 className={LoginFormStyles.headerText}>
          Bienvenido a wallaclone
        </h1>

        <p className={LoginFormStyles.registerText}>
          Regístrate o inicia sesión
        </p>

        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className={LoginFormStyles.formWrapper}>
            <input
              type="text"
              className={LoginFormStyles.loginInputs}
              placeholder="Dirección de email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className={LoginFormStyles.loginInputs}
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <div className={LoginFormStyles.rememberContainer}>
              <input
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={handleChange}
              />
              <p className={LoginFormStyles.rememberText}>
                Recordar contraseña
              </p>
            </div>

            <div className={LoginFormStyles.submitContainer}>
              <button
                className={LoginFormStyles.loginButton}
                disabled={!validate(validEmail, validPassword)}
              >
                Iniciar sesión
              </button>
              <div className={LoginFormStyles.otherOptions}>
                <div className={LoginFormStyles.optionsText}>
                  <Link to="/signup" className={LoginFormStyles.signupLink}>Regístrate</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default LoginForm;
