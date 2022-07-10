import React from "react";

const TagsFilterResponsive = () => {
  return (
    <div className="block md:hidden left-0 right-0 top-[66px] w-full h-full min-w-auto fixed bg-white overflow-hidden">
      <div className="flex h-[70px] px-[1.5rem] items-center">
        <p className="text-black font-bold m-0 block">Categoría</p>
      </div>
      <div className="max-h-[calc(100% - 158px)] overflow-auto px-[1.5rem] block">
        <div className="block">
          <form className="w-full block">
            <div className="max-w-[540px] w-full px-[15px] mx-auto block">
              <div className="flex flex-wrap">
                <div className="flex max-w-[25%]">
                  <div className="min-h-[96px] cursor-pointer p-[0.5rem] items-center justify-center flex-col flex">
                    <span className="mt-[5px] text-[.875rem] text-center cursor-pointer hover:text-[#13c1ac]">
                      Todas las categorías
                    </span>
                  </div>
                </div>

                <div className="flex max-w-[25%]">
                  <div className="min-h-[96px] cursor-pointer p-[0.5rem] items-center justify-center flex-col flex">
                    <span className="mt-[5px] text-[.875rem] text-center cursor-pointer hover:text-[#13c1ac]">
                      Coches
                    </span>
                  </div>
                </div>

                <div className="flex max-w-[25%]">
                  <div className="min-h-[96px] cursor-pointer p-[0.5rem] items-center justify-center flex-col flex">
                    <span className="mt-[5px] text-[.875rem] text-center cursor-pointer hover:text-[#13c1ac]">
                      Motos
                    </span>
                  </div>
                </div>

                <div className="flex max-w-[25%]">
                  <div className="min-h-[96px] cursor-pointer p-[0.5rem] items-center justify-center flex-col flex">
                    <span className="mt-[5px] text-[.875rem] text-center cursor-pointer hover:text-[#13c1ac]">
                      Motor y Accesorios
                    </span>
                  </div>
                </div>

                <div className="flex max-w-[25%]">
                  <div className="min-h-[96px] cursor-pointer p-[0.5rem] items-center justify-center flex-col flex">
                    <span className="mt-[5px] text-[.875rem] text-center cursor-pointer hover:text-[#13c1ac]">
                      Moda y Accesorios
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[88px] px-[1.5rem] items center justify-end flex">
        <button className="bg-transparent py-[8px] cursor-pointer">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default TagsFilterResponsive;
