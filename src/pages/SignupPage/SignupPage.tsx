import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import UserService from "../../api/service/User.service";
import { useAuthContext } from "../../components/auth/context";
import { login } from "../../components/auth/service";
import Spinner from "../../components/spinner/Spinner";
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
      /* .then(() => {
        handleSignup();
      }) */

      .then(async () => {
        await login(credentials);
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
      <Toaster position="top-center" reverseOrder={false} />
      <SignupForm onSubmit={handleSubmit} />
      {isLoading && (
        <div className="flex justify-center bg-gray-200 py-4 h-full">
          <Spinner />
        </div>
      )}
      {error && (
        <div onClick={resetError}>
          {toast.error("Este usuario ya existe" || error.message)}
        </div>
      )}
    </div>
  );
}

export default SignupPage;
