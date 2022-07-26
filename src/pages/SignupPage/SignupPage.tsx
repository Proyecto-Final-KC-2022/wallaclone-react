import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import UserService from "../../api/service/User.service";
import { useAuthContext } from "../../components/auth/context";
import { login } from "../../components/auth/service";
import Spinner from "../../components/spinner/Spinner";
import useMutation from "../../hooks/useMutation";

import SignupForm from "./SignupForm";

const isValidEmail = (email: string) => {
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegEx.test(email)) {
    return true;
  }
  return false;
};
function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignup } = useAuthContext();
  const { isLoading, error, execute, resetError } = useMutation(
    UserService.registerUser
  );

  const handleSubmit = (credentials) => {
    if (credentials?.email && isValidEmail(credentials.email)) {
      execute(credentials)
        .then(async () => {
          await login(credentials);
          handleSignup();
        })
        .then(() => {
          const from = location.state?.["from"]?.pathname || "/";
          navigate(from, { replace: true });
        });
    } else {
      toast.error("Debes introducir un email válido");
    }
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
