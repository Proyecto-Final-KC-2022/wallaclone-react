import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import useForm from "../../hooks/useForm";

const validName = ({ name }) => name;
const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

const SignupForm = ({ onSubmit }) => {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    name: "",
    email: "",
    password: "",
    remember: false,
  });
  const { name, email, password, remember } = credentials;

  return (
    <div className='px-[15px] py-[15px] min-h-[100vh] bg-gray-200 items-center justify-center flex'>
      <div className='bg-white p-8 rounded-xl w-[500px] h-[500px] items-center'>
        <div className='flex m-0 justify-end cursor-pointer text-2xl'>
          <Link to='/'>
            <GrClose />
          </Link>
        </div>

        <h1 className='font-semibold text-center text-xl text-gray-700 pt-0'>
          Regístrate en wallaclone
        </h1>
        <p className='text-center text-gray-700 mb-5'>Escribe tus datos</p>

        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
            <input
              type='text'
              className='border-b border-gray-700 p-2 mb-5 outline-none'
              placeholder='Nombre y apellidos'
              name='name'
              value={name}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              className='border-b border-gray-700 p-2 mb-5 outline-none'
              placeholder='Dirección de email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              className='border-b border-gray-700 p-2 mb-5 outline-none'
              placeholder='Contraseña'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          <div className='text-center pt-8'>
            <button
              className='w-full h-[42px] px-5 py-2 bg-[#13c1ac] hover:bg-[#0f9989] text-white rounded-[21px]'
              type='submit'
              disabled={!validate(validName, validEmail, validPassword)}
            >
              Crear una cuenta
            </button>
            <div className='flex justify-center items-center'>
              <Link to='/login' className='text-center text-gray-700 my-4'>
                Inicia sesión
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
