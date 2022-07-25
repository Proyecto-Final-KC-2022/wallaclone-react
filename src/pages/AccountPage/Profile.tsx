import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";

import useMutation from "../../hooks/useMutation";
import socket from "../../socket-context/socketContext";
import LogoutButton from "../../components/common/LogoutButton";
import { logout } from "../../components/auth/service";

import useQuery from "../../hooks/useQuery";
import UserService from "../../api/service/User.service";

import Avatar from "../../images/avatar.png";
import storage from "../../utils/storage";
import { parseJwt } from "../../utils/utils";

const Profile = () => {
  /* const { userId } = useParams(); */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const auth = storage.get("auth") || storage.getSession("auth");
  const jwtToken = auth?.replace('"', "");
  const userId = jwtToken && parseJwt<{ _id?: string }>(jwtToken)?._id;
  // Parte de getUser
  const {
    isLoading,
    error,
    data: user,
  } = useQuery(UserService.getUser, userId)

  
  //

  const mutation = useMutation(logout);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogoutConfirm = async () => {
    const userLoggedOutId = await mutation.execute();

    socket.emit("userLogout", { userId: userLoggedOutId });
    logout();
    const from = location.state?.["from"]?.pathname || "/";
    const refreshPage = () => {
      navigate(0);
    };
    navigate(from, { replace: true });

    refreshPage();
  };

  return (
    <>
      <div className="max-w-full w-full flex-1 block text-left">
        <div className="min-h-full block">
          <div className="py-[32px] max-w-[960px] w-full px-[15px] mx-auto block">
            <div className="mb-[1rem] flex flex-wrap mx-[-15px]">
              <div className="flex flex-col max-w-[75%] relative w-full min-h-[1px] px-[15px]">
                <div className="flex items-center">
                  <h1 className="text-[1.375rem] text-[#253238] font-bold flex items-center mt-0 mb-[0.5rem]">
                    <span className="mr-[12px] text-left">Tu perfil</span>
                  </h1>
                </div>
                <div className="flex items-center">
                  <h4 className="text-[.875rem] text-[#607d8b] mb-0 leading-5 font-normal block">
                    Aquí podrás ver y editar los datos de tu perfil
                  </h4>
                </div>
              </div>

              <div className="block max-w-[25%] relative w-full min-h-[1px] px-[15px]">
                <div className="flex flex-end justify-end" onClick={handleOpen}>
                  <LogoutButton />
                </div>
              </div>
            </div>

            <div className="mb-[1rem] flex flex-wrap mx-[-15px]">
              <div className="flex max-w-[66.6666666667%] relative w-full min-h-[1px] px-[15px] items-center grow-0 shrink-0 basis-2/3">
                <div className="overflow-hidden leading-8 inline-block w-full">
                  <a className="hover:border-b-2 border-[#13c1ac] hover:text-[#13c1ac] inline-block text-[.75rem] mr-[20px] font-bold whitespace-nowrap p-0 text-left cursor-pointer">
                    PERFIL
                  </a>
                </div>
              </div>
            </div>

            {userId && user && (
              <div className="block mt-[0em]">
              <div className="rounded-[10px] bg-white border-1 border-[#eceff1] p-[20px] mb-[20px] block">
                <div className="flex flex-wrap mx-[15px]">
                  <div className="basis-0 grow max-w-full w-full relative px-[15px] block">
                    <h2 className="mb-[20px] font-bold text-[.875rem] text-[#13c1ac]">
                      Imágen del perfíl
                    </h2>
                  </div>
                </div>
                <div className="w-full block">
                  <div className="mb-[20px] block">
                    <div className="block px-4">
                      <div className="flex relative m-[4px]">
                        <div className="w-full px-[8px] text-center mb-[8px] justify-center flex">
                          <img className="bg-cover rounded-[50%] object-cover bg-center w-[80px] h-[80px] border bg-gray-200" src={Avatar} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] bg-white border-1 border-[#eceff1] p-[20px] mb-[20px] block">
                <div className="flex flex-wrap mx-[15px]">
                  <div className="basis-0 grow max-w-full w-full relative px-[15px] block">
                    <h2 className="mb-[20px] font-bold text-[.875rem] text-[#13c1ac]">
                      Información pública
                    </h2>
                  </div>
                </div>

                <div className="flex flex-wrap mx-[15px]">
                  <div className="relative w-full min-h-[1px] px-[15px]">
                    <div className="mb-[1rem] block">
                      <div className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                        Nombre
                      </div>
                      <div className="block h-[50px] w-full text-[1rem] border border-[#eceff1] rounded-[6px] py-[0.375rem] px-[0.75rem] overflow-visible">{user?.name}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap mx-[15px]">
                  <div className="relative w-full min-h-[1px] px-[15px]">
                    <div className="mb-[1rem] block">
                      <div className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                        Email
                      </div>
                      <div className="block h-[50px] w-full text-[1rem] border border-[#eceff1] rounded-[6px] py-[0.375rem] px-[0.75rem] focus:outline-[#64f0df] overflow-visible">{user?.email}</div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            ) }
            

          </div>
        </div>
      </div>
      
      <Modal open={open} onClose={handleClose}>
        <div className="absolute top-[30%] right-[50%] translate-x-1/2 translate-y-1/2 w-[400px] bg-white rounded-[8px] p-4">
          <div className="p-[20px] relative flex-1 block">
            <h2 className="font-bold text-[1rem] text-[#253238]">
              Cerrar sesión
            </h2>
            <p className="mt-[16px] text-[.875rem] text-[#253238]">
              ¿Estás seguro de que quieres cerrar la sesión?
            </p>
          </div>
          <div className="p-[20px] flex items-center justify-end mt-4">
            <button
              className="text-[#253238] pr-[20px] cursor-pointer"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <span> | </span>
            <button
              className="text-[#fd6c67] pl-[20px] cursor-pointer"
              onClick={handleLogoutConfirm}
            >
              Aceptar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Profile;
