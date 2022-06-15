import { Link, useNavigate } from "react-router-dom";

import { GrClose } from "react-icons/gr";

const style = {};

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl w-[500px] h-[500px] items-center">
        <div
          className="flex m-0 justify-end cursor-pointer text-2xl"
          onClick={() => navigate("/")}
        >
          <GrClose />
        </div>
        <h1 className="font-semibold text-center text-xl text-gray-700 pt-0">
          Regístrate en wallaclone
        </h1>
        <p className="text-center text-gray-700 mb-5">
          Escribe tus datos
        </p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border-b border-gray-700 p-2 mb-5 outline-none"
            placeholder="Nombre y apellidos"
          />
          <input
            type="text"
            className="border-b border-gray-700 p-2 mb-5 outline-none"
            placeholder="Dirección de email"
          />
          <input
            type="text"
            className="border-b border-gray-700 p-2 mb-5 outline-none"
            placeholder="Contraseña"
          />
        </div>
        <div className="text-center pt-8">
          <button className="w-full h-[42px] px-5 py-2 bg-[#13c1ac] hover:bg-[#0f9989] text-white rounded-[21px]">
            Crear una cuenta
          </button>
          <div className="flex justify-center items-center">
            <Link to="/login" className="text-center text-gray-700 my-4">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
