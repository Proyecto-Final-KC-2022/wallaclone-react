import React from "react";
import LogoutButton from "../../components/common/LogoutButton";

const Profile = () => {
  return (
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
                <div className="text-[#607d8b] mx-[16px] flex">|</div>
                <div className="text-[.875rem] text-[#607d8b] flex">
                  <a className="hover:text-[#13c1ac] hover:underline cursor-pointer">
                    Ver mi perfil público
                  </a>
                </div>
              </div>
            </div>

            <div className="block max-w-[25%] relative w-full min-h-[1px] px-[15px]">
              <div className="flex flex-end justify-end">
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
                <a className="hover:border-b-2 border-[#13c1ac] hover:text-[#13c1ac] inline-block text-[.75rem] mr-[20px] font-bold whitespace-nowrap p-0 text-left cursor-pointer">
                  CUENTA
                </a>
                <a className="hover:border-b-2 border-[#13c1ac] hover:text-[#13c1ac] inline-block text-[.75rem] mr-[20px] font-bold whitespace-nowrap p-0 text-left cursor-pointer">
                  OPINIONES
                </a>
              </div>
              <div className="lg:flex w-full relative min-h-[1px] px-[15px] items-center  hidden justify-center">
                <div className="float-right text-[#607d8b] text-[.875rem] block">
                  <div className="inline-block">
                    <img
                      src="https://es.wallapop.com/images/icons/empty_star.svg"
                      className="inline-flex w-[16px] h-[16px] mr-[0.25rem]"
                    />
                    <img
                      src="https://es.wallapop.com/images/icons/empty_star.svg"
                      className="inline-flex w-[16px] h-[16px] mr-[0.25rem]"
                    />
                    <img
                      src="https://es.wallapop.com/images/icons/empty_star.svg"
                      className="inline-flex w-[16px] h-[16px] mr-[0.25rem]"
                    />
                    <img
                      src="https://es.wallapop.com/images/icons/empty_star.svg"
                      className="inline-flex w-[16px] h-[16px] mr-[0.25rem]"
                    />
                    <img
                      src="https://es.wallapop.com/images/icons/empty_star.svg"
                      className="inline-flex w-[16px] h-[16px] mr-[0.25rem]"
                    />
                  </div>
                </div>
                <span className="text-[#607d8b] text-[.875rem]">
                  (37 opiniones)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
