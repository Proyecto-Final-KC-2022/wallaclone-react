import { useState } from "react";

import { IoPricetagsOutline, IoMailOutline } from "react-icons/io5"
import { AiOutlineHeart } from "react-icons/ai";

import Header from "../../components/header/Header"
import LogoutButton from "../../components/common/LogoutButton";

import Avatar from "../../images/avatar.png"

const AccountPage = () => {
  const [loginModal, setLoginModal] = useState(false);
  const onClickLoginButton = ()=>{
    setLoginModal(true);
  }
  return (
    <>
      <Header onClickLoginButton={onClickLoginButton} />
      <div className="min-h-[100vh] bg-gray-200 flex">
        <div className="sticky top-[65px] left-0 bottom-0 h:calc(100vh - 65px) block">
          <div className="h-full overflow-auto w-[216px] bg-white border-r-2 flex-col flex">

            <div className="flex relative min-h-[60px] cursor-pointer my-[1.5rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200">
              <div className="px-[0.5rem] inline-block text-left">
                <div className="block relative rounded-[10px]">
                  <img className="bg-cover rounded-[50%] bg-center object-cover w-[32px] h-[32px]" src={Avatar} />
                </div>
              </div>
              <div className="flex flex-col ml-[0.5rem] text-[16px] font-normal text-left">
                <div className="items-center flex">
                  <h3 className="font-bold text-[1rem] max-w-[105px] overflow-hidden text-ellipsis whitespace-nowrap mr-[0.25rem] block">Nombre del usuario</h3>
                </div>
                <div className="items-center flex">
                  <div className="items-center flex">
                    <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                    <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                    <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                    <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                    <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                  </div>
                  <span className="text-[#90a4ae] text-[.875rem]">(37)</span>
                </div>
              </div>
            </div>

            <div className="flex relative min-h-[48px] cursor-pointer mb-[0.25rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200 text-left">
              <div className="flex relative rounded-[8px] min-h-[48px] mx-[0.5rem] mb-[0.25rem] items-center">
                <div className="flex px-[0.5rem]">
                  <IoPricetagsOutline className="text-2xl" />
                </div>
                <span className="font-bold text-[1rem] text-[#253238] overflow-hidden whitespace-nowrap ml-[0.5rem]">Productos</span>
              </div>
            </div>

            <div className="flex relative min-h-[48px] cursor-pointer mb-[0.25rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200 text-left">
              <div className="flex relative rounded-[8px] min-h-[48px] mx-[0.5rem] mb-[0.25rem] items-center">
                <div className="flex px-[0.5rem]">
                  <IoMailOutline className="text-2xl" />
                </div>
                <span className="font-bold text-[1rem] text-[#253238] overflow-hidden whitespace-nowrap ml-[0.5rem]">Buzón</span>
              </div>
            </div>

            <div className="flex relative min-h-[48px] cursor-pointer mb-[0.25rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200 text-left">
              <div className="flex relative rounded-[8px] min-h-[48px] mx-[0.5rem] mb-[0.25rem] items-center">
                <div className="flex px-[0.5rem]">
                  <AiOutlineHeart className="text-2xl" />
                </div>
                <span className="font-bold text-[1rem] text-[#253238] overflow-hidden whitespace-nowrap ml-[0.5rem]">Favoritos</span>
              </div>
            </div>

          </div>
        </div>
        
        <div className="max-w-full w-full flex-1 block text-left">
          <div className="min-h-full block">
            
            <div className="py-[32px] max-w-[960px] w-full px-[15px] mx-auto block bg-red-300">

              <div className="mb-[1rem] flex flex-wrap mx-[-15px] bg-green-300">

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
                      <a className="hover:text-[#13c1ac] hover:underline cursor-pointer">Ver mi perfil público</a>
                    </div>
                  </div>
                </div>

                <div className="block max-w-[25%] relative w-full min-h-[1px] px-[15px]">
                  <div className="flex flex-end justify-end">
                    <LogoutButton />
                  </div>
                </div>

              </div>

              <div className="mb-[1rem] flex flex-wrap mx-[-15px] bg-yellow-200">

                <div className="flex max-w-[66.6666666667%] relative w-full min-h-[1px] px-[15px] items-center grow-0 shrink-0 basis-2/3">
                  <div className="overflow-hidden leading-8 inline-block">
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

                  <div className="flex max-w-[33.3333333333%] relative w-full min-h-[1px] px-[15px] items-center bg-black">
                    <div className="float-right text-[#607d8b] text-[.875rem] block">
                      <div className="inline-block">
                        <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                        <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                        <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                        <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                        <img src="https://es.wallapop.com/images/icons/empty_star.svg" className="inline-flex w-[16px] h-[16px] mr-[0.25rem]" />
                      </div>
                      <span className="text-[#607d8b] text-[.875rem] flex">(37 opiniones)</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountPage