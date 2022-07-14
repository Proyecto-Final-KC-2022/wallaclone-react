import React from "react";
import { IoCameraOutline } from "react-icons/io5";

import Camera from "../../images/camera-green.svg"

const UploadPage = () => {
  return (
    <div className="max-w-full w-full flex-1 block text-left">
      <div className="min-h-full block">
        <div className="py-[32px] max-w-[700px] w-full px-[15px] mx-auto block">
          <div className="rounded-[10px] bg-white border border-1 border-[#eceff1] p-[20px] mb-[20px] block">
            <div className="flex flex-wrap mx-[15px]">
              <div className="basis-0 grow max-w-full w-full relative px-[15px] block">
                <h2 className="mb-[8px] font-bold text-[.875rem] text-[#13c1ac] block">
                  ¿QUÉ SUBIRÁS?
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap mx-[15px]">
              <div className="basis-0 grow max-w-full w-full relative px-[15px] block">
                <p className="mb-[8px] text-[.875rem] text-[#90a4ae] block">
                  En Wallaclone hay sitio para (casi) todo
                </p>
              </div>
            </div>
          </div>

          <form className="block mt-[0em]">
            <div className="rounded-[10px] bg-white border-1 border-[#eceff1] p-[20px] mb-[20px] block">
              <div className="flex flex-wrap mx-[15px]">
                <div className="basis-0 grow max-w-full w-full relative px-[15px] block">
                  <h2 className="mb-[20px] font-bold text-[.875rem] text-[#13c1ac]">
                    INFORMACIÓN DE TU PRODUCTO
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap mx-[15px]">
                <div className="relative w-full min-h-[1px] px-[15px]">
                  <div className="mb-[1rem] block">
                    <label className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                      ¿Qué estás vendiendo?
                    </label>
                    <span className="text-[.75rem] text-[#90a4ae] float-right mt-[4px] mb-[8px]">
                      0/50
                    </span>
                    <input
                      className="block h-[50px] w-full text-[1rem] border border-[#eceff1] rounded-[6px] py-[0.375rem] px-[0.75rem] focus:outline-[#64f0df] overflow-visible"
                      placeholder="En pocas palabras..."
                      maxLength={50}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-[15px] grow-0 shrink-0 basis-2/4 relative w-full min-h-[1px] px-[15px] gap-2">
                <div className="mb-[1rem] block basis-2/4">
                  <label className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                    Tags
                  </label>
                  <div className="block w-full text-[1rem] text-[#495057] bg-white border rounded-[6px] px-4">
                    <select className="inline-block m-0 relative w-full h-[50px] outline-none cursor-pointer">
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Tags
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Trabajo
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Estilo de vida
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Motor
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Telefonía móvil
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Ocio
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Informática
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mb-[1rem] block basis-1/3">
                  <div className="mb-[1rem] block ">
                    <label className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                      Precio
                    </label>
                    <input
                      className="block h-[50px] w-full text-[1rem] bg-white border rounded-[6px] px-4 text-[#495057] whitespace-nowrap overflow-hidden outline-none"
                      placeholder="(No te pases)"
                    ></input>
                  </div>
                </div>

                <div className="mb-[1rem] block basis-3 w-full max-w-full">
                  <div className="mb-[1rem] block">
                    <label className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                      Moneda
                    </label>
                    <input
                      className="block h-[50px] w-full text-[1rem] bg-white border rounded-[6px] px-4 text-[#495057] whitespace-nowrap overflow-hidden outline-none"
                      placeholder="€"
                      disabled
                    ></input>
                  </div>
                </div>

                <div className="mb-[1rem] block basis-2/4">
                  <label className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                    Estado del producto
                  </label>
                  <div className="block w-full text-[1rem] text-[#495057] bg-white border rounded-[6px] px-4">
                    <select className="inline-block m-0 relative w-full h-[50px] outline-none cursor-pointer">
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Estado del producto
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Compra
                      </option>
                      <option className="border rounded-[6px] ml-[-2px] cursor-pointer w-full h-[50px] flex text-[#495057] whitespace-nowrap overflow-hidden">
                        Venta
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-[15px]">
                <div className="grow-0 shrink-0 basis-full max-w-full w-full relative min-h-[1px] px-[15px] block">
                  <div className="mb-[1rem] block">
                    <label className="text-[1rem] text-[#607d8b] inline-block mb-[0.5rem]">
                      Descripción
                    </label>
                    <span className="text-[.75rem] text-[#90a4ae] float-right mt-[4px] mb-[8px]">
                      0/640
                    </span>
                    <textarea
                      className="block h-full w-full text-[1rem] border border-[#eceff1] rounded-[6px] py-[0.375rem] px-[0.75rem] focus:outline-[#64f0df] overflow-auto resize-y m-0"
                      placeholder="Añade información relevante como estado, modelo, color..."
                      maxLength={640}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] bg-white border-1 border-[#eceff1] p-[20px] mb-[20px] block">
              <div className="flex flex-wrap mx-[15px]">
                <div className="basis-0 grow max-w-full w-full relative px-[15px] block">
                  <h2 className="mb-[20px] font-bold text-[.875rem] text-[#13c1ac]">
                    FOTOS
                  </h2>
                </div>
              </div>

              <div className="w-full block">
                <div className="mb-[20px] block">
                  <div className="block px-4">
                    <div className="flex flex-wrap relative m-[4px]">
                      <div className="w-full px-[8px] text-center mb-[8px] block">
                        <div className="border-2 border-dashed h-[50px] w-full relative rounded-[10px] items-center justify-center flex max-w-[767.98px]">
                          {/* <img className="w-[20px] h-[20px]" src={Camera} /> */}
                          <input type="file"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mx-[15px]">
              <div className="flex max-w-[41.66%] relative w-full min-h-[1px] px-[15px]">
                <button className="cursor-pointer py-[12px] px-[20px] rounded-[25px] mb-[60px] mt-[12px] block w-full border-1 border-[#13c1ac] bg-[#13c1ac] hover:bg-[#0f9989]" type="submit">
                  <span className="text-white text-center items-center">Subir producto</span>
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
