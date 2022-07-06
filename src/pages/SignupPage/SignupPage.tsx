import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../../api/service/User.service";
import { useAuthContext } from "../../components/auth/context";
import useMutation from "../../hooks/useMutation";

import SignupForm from "./SignupForm";

function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignup } = useAuthContext();
  const { isLoading, error, execute, resetError } = useMutation(
    UserService.registerUser
  );

  const handleSubmit = (credentials) => {
    execute(credentials)
      .then(() => {
        handleSignup();
      })
      //TODO: invocar el método de logueo antes de hacer la navegación
      .then(() => {
        const from = location.state?.["from"]?.pathname || "/";
        navigate(from, { replace: true });
      });
  };

  return (
    <div>
      <SignupForm onSubmit={handleSubmit} />
      {isLoading && <p>...login in wallaclone</p>}
      {error && (
        <div onClick={resetError} style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default SignupPage;
