import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMailOutline, IoPricetagsOutline } from "react-icons/io5";

import Avatar from "../../images/avatar.png";

const AccountNavbar = () => {
  return (
    <div className="sticky top-[65px] left-0 bottom-0 h:calc(100vh - 65px) lg:block hidden border-r-1 border-gray-200">
      <div className="h-full overflow-auto w-[216px] bg-white border-r-2 flex-col flex">

        <Link to="/account" className="flex relative min-h-[60px] cursor-pointer my-[1.5rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200">
          <div className="px-[0.5rem] inline-block text-left">
            <div className="block relative rounded-[10px]">
              <img
                className="bg-cover rounded-[50%] bg-center object-cover w-[32px] h-[32px]"
                src={Avatar}
              />
            </div>
          </div>
          <div className="flex flex-col ml-[0.5rem] text-[16px] font-normal text-left">
            <div className="items-center flex">
              <h3 className="font-bold text-[1rem] max-w-[105px] overflow-hidden text-ellipsis whitespace-nowrap mr-[0.25rem] block">
                Nombre del usuario
              </h3>
            </div>
            <div className="items-center flex">
              <div className="items-center flex">
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
              <span className="text-[#90a4ae] text-[.875rem]">(37)</span>
            </div>
          </div>
        </Link>

        <Link to="/account/products" className="flex relative min-h-[48px] cursor-pointer mb-[0.25rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200 text-left">
          <div className="flex relative rounded-[8px] min-h-[48px] mx-[0.5rem] mb-[0.25rem] items-center">
            <div className="flex px-[0.5rem]">
              <IoPricetagsOutline className="text-2xl" />
            </div>
            <span className="font-bold text-[1rem] text-[#253238] overflow-hidden whitespace-nowrap ml-[0.5rem]">
              Productos
            </span>
          </div>
        </Link>

        <div className="flex relative min-h-[48px] cursor-pointer mb-[0.25rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200 text-left">
          <div className="flex relative rounded-[8px] min-h-[48px] mx-[0.5rem] mb-[0.25rem] items-center">
            <div className="flex px-[0.5rem]">
              <IoMailOutline className="text-2xl" />
            </div>
            <span className="font-bold text-[1rem] text-[#253238] overflow-hidden whitespace-nowrap ml-[0.5rem]">
              Buzón
            </span>
          </div>
        </div>

        <div className="flex relative min-h-[48px] cursor-pointer mb-[0.25rem] mx-[0.5rem] items-center hover:rounded-xl hover:bg-gray-200 text-left">
          <div className="flex relative rounded-[8px] min-h-[48px] mx-[0.5rem] mb-[0.25rem] items-center">
            <div className="flex px-[0.5rem]">
              <AiOutlineHeart className="text-2xl" />
            </div>
            <span className="font-bold text-[1rem] text-[#253238] overflow-hidden whitespace-nowrap ml-[0.5rem]">
              Favoritos
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccountNavbar;
