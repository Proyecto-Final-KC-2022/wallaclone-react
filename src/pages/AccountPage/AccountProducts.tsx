import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";

import Img from "../../images/bmw-serie2.jpg";
const AccountProducts = () => {
  return (
    <div className="max-w-full w-full flex-1 block text-left">
      <div className="min-h-full block">
        <div className="py-[32px] max-w-[960px] w-full px-[15px] mx-auto block">
          <div className="mb-[1rem] flex flex-wrap mx-[-15px]">
            <div className="flex flex-col max-w-[75%] relative w-full min-h-[1px] px-[15px]">
              <div className="flex items-center">
                <h1 className="text-[1.375rem] text-[#253238] font-bold flex items-center mt-0 mb-[0.5rem]">
                  <span className="mr-[12px] text-left">Tus productos</span>
                </h1>
              </div>
              <div className="flex items-center">
                <h4 className="text-[.875rem] text-[#607d8b] mb-0 leading-5 font-normal block">
                  Aquí podrás subir productos, gestionar los que ya tienes y
                  destacarlos para venderlos antes
                </h4>
              </div>
            </div>
          </div>

          <div className="mb-[1rem] flex flex-wrap mx-[-15px]">
            <div className="flex max-w-[66.6666666667%] relative w-full min-h-[1px] px-[15px] items-center grow-0 shrink-0 basis-2/3">
              <div className="overflow-hidden leading-8 inline-block w-full">
                <a className="hover:border-b-2 border-[#13c1ac] hover:text-[#13c1ac] inline-block text-[.75rem] mr-[20px] font-bold whitespace-nowrap p-0 text-left cursor-pointer">
                  EN VENTA
                </a>
              </div>
            </div>
          </div>

          <div className="h-full w-full block">
            <div className="h-full flex flex-col bg-gray-200 rounded-[10px]">
              <div className="max-w-[960px] w-full px-[15px] mx-auto block container">
                <div className="block">
                  <div className="rounded-[10px]">
                    <div className="flex flex-wrap mx-[-15px]">
                      <div className="items-center justify-center flex max-w-[8.3333333333%] w-full relative min-h-[1px]">
                        <button className="w-[24px] h-[24px] border-2 border-[#CFD8DC] rounded-[6px] bg-transparent p-0 flex items-center justify-center cursor-pointer hover:border-[#13c1ac]">
                          <ImCheckboxUnchecked className="overflow-hidden flex w-[23px] h-[23px] text-transparent rounded-[6px]" />
                        </button>
                      </div>
                      <div className="block grow max-w-full basis-0 relative w-full min-h-[1px] px-[15px] text-left">
                        <div className="bg-white rounded-[10px] border border-1 flex flex-wrap mx-[15px]">
                          <div className="flex cursor-pointer p-0 items-center justify-center max-w-full w-full">
                            <div className="p-[4px]">
                              <img
                                className="m-0 w-[80px] h-[80px] bg-cover rounded-[4px] flex relative"
                                src={Img}
                              />
                            </div>

                            <div className="basis-0 grow max-w-full w-full relative min-h-[1px] px-[15px] block">
                              <div className="h-full items-center flex flex-wrap mx-[-15px]">
                                <div className="cursor-pointer flex flex-col relative w-full px-[15px]">
                                  <span className="text-[1.25rem] font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                    Precio €
                                  </span>
                                  <span className="text-[#90a4ae] max-w-[250px] w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dicta, odit debitis fuga
                                    maiores unde deleniti adipisci, fugiat
                                    accusamus culpa dolores voluptatem sed
                                    soluta asperiores reprehenderit qui dolorum,
                                    tenetur quis voluptate ratione vero quisquam
                                    rerum! Velit quod, numquam facere voluptatum
                                    quidem, quam nam rem tempora illum vero
                                    accusantium suscipit.
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="basis-0 grow max-w-full w-full relative min-h-[1px] px-[15px] block">
                              <div className="h-full items-center flex flex-wrap mx-[-15px]">
                                <div className="cursor-pointer flex flex-col relative w-full px-[15px]">
                                  <span className="text-[0.875rem] w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                    Publicado
                                  </span>
                                  <span className="text-[#90a4ae] max-w-[250px] w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                                    Fecha
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end items-center max-w-[33.3333333333%] w-full relative min-h-[1px] px-[15px]">
                              <button className="w-[40px] h-[40px] rounded-[8px] mr-[8px] p-0 flex items-center justify-center border cursor-pointer hover:bg-[#36474f4d] hover:text-white">
                                <div className="w-[24px] h-[24px] flex cursor-pointer items-center justify-center">
                                  <BsPencil className="text-[24px]" />
                                </div>
                              </button>

                              <button className="w-[40px] h-[40px] rounded-[8px] mr-[8px] p-0 flex items-center justify-center border cursor-pointer hover:bg-[#fd6c67] hover:text-white">
                                <div className="w-[24px] h-[24px] flex cursor-pointer items-center justify-center">
                                  <BsTrash className="text-[24px]" />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProducts;
