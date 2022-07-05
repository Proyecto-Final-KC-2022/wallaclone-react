import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { GrClose } from "react-icons/gr";

const LoginPage = () => {
  return (
    <div className="px-[15px] py-[15px] min-h-[100vh] bg-gray-200 items-center justify-center flex">
      <div className="bg-white p-8 rounded-xl w-[500px] h-[500px] items-center">
        <div className="flex m-0 justify-end cursor-pointer text-2xl">
          <Link to="/">
            <GrClose />
          </Link>
        </div>
        <h1 className="font-semibold text-center text-xl text-gray-700 pt-0">
          Bienvenido a wallaclone
        </h1>

        <p className="text-center text-gray-700 mb-5">
          Regístrate o inicia sesión
        </p>

        <div className="flex flex-col">
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
            Iniciar sesión
          </button>
          <div className="flex justify-center items-center">
            <p className="text-center text-gray-700 my-4">
              Recuperar contraseña
            </p>
            <span className="mx-4">|</span>
            <div className="text-center text-gray-700 my-4">
              <Link to="/signup">Regístrate</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
