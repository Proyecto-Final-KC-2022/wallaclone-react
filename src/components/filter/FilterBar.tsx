import { useState } from "react";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import TagsFilter from "./TagsFilter";
import PriceFilter from "./PriceFilter";

const Filter = () => {
  const [tagsToggle, setTagsToggle] = useState(false);

  const [priceToggle, setPriceToggle] = useState(false);

  return (
    <div className="block sticky top-[66px] text-left border-t-[1px] border-gray-300">
      <div className="flex items-center w-full h-full bg-white overflow-auto px-[1rem] py-[0.5rem]">
        <div className="m-[0.25rem]">
          <div className="flex shadow-md shadow-gray-400/20 bg-white h-[36px] rounded-[21px] items-center justify-center px-[1rem] hover:bg-slate-100">
            <button
              className="basis-full overflow-hidden px-1 items-center justify-center cursor-pointer flex"
              onClick={() => setTagsToggle(!tagsToggle)}
            >
              <div className="text-[.875rem]">Selecciona una categoría</div>
              <div className="pl-2">
                {tagsToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>
          </div>
        </div>

        <div className="m-[0.25rem]">
          <div className="flex shadow-md shadow-gray-400/20 bg-white h-[36px] rounded-[21px] items-center justify-center px-[1rem] hover:bg-slate-100">
            <button 
                className="basis-full overflow-hidden px-1 items-center justify-center cursor-pointer flex"
                onClick={() => setPriceToggle(!priceToggle)}
            >
              <div className="pr-2">
                <AiOutlineDollarCircle />
              </div>
              <div className="text-[.875rem]">Precio</div>
              <div className="pl-2">
                {priceToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>
          </div>
        </div>

        <div className="m-[0.25rem]">
          <div className="flex shadow-md shadow-gray-400/20 bg-[#13c1ac] hover:bg-[#0f9989]  h-[36px] rounded-[21px] items-center justify-center px-[1rem]">
            <button className="basis-full overflow-hidden px-1 items-center justify-center cursor-pointer flex">
              <div className="text-[.875rem] text-white">Buscar</div>
            </button>
          </div>
        </div>
      </div>

      {tagsToggle && <TagsFilter />}

      {priceToggle && <PriceFilter />}

    </div>
  );
};

export default Filter;
