import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../modal/Modal";

import { useForm } from "../../hooks/useForm";

import { GrClose } from "react-icons/gr";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export const SignUp = ({ open, onClose, onSubmit }: any) => {
  if (!open) return null;

  const navigate = useNavigate();

  const { name, email, password, form, handleChange, handleSubmit } =
    useForm<FormData>({
      name: "",
      email: "",
      password: "",
    });

  return (
    <>
      <Modal>
        <div
          className="flex m-0 justify-end cursor-pointer text-2xl"
          onClick={onClose}
        >
          <GrClose />
        </div>

        <h1 className="font-semibold text-center text-xl text-gray-700 pt-0">
          Regístrate en wallaclone
        </h1>
        <p className="text-center text-gray-700 mb-5">Escribe tus datos</p>

        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <input
              type="text"
              className="border-b border-gray-700 p-2 mb-5 outline-none"
              placeholder="Nombre y apellidos"
              name="nombre"
              value={name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="border-b border-gray-700 p-2 mb-5 outline-none"
              placeholder="Dirección de email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              className="border-b border-gray-700 p-2 mb-5 outline-none"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="text-center pt-8">
            <button
              className="w-full h-[42px] px-5 py-2 bg-[#13c1ac] hover:bg-[#0f9989] text-white rounded-[21px]"
              onClick={handleSubmit}
            >
              Crear una cuenta
            </button>
            <div className="flex justify-center items-center">
              <Link to="/login" className="text-center text-gray-700 my-4">
                Inicia sesión
              </Link>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SignUp;
