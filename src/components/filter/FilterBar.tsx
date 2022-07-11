import { useState } from "react";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import TagsFilter, { TagWithStatus } from "./TagsFilter";
import PriceFilter, { PriceRange } from "./PriceFilter";
export type BarFilters = {
  tags?: Array<string>;
  priceRange?: PriceRange;
};

const Filter = ({
  getFilters,
}: {
  getFilters: (filters: BarFilters) => void;
}) => {
  const [tagsToggle, setTagsToggle] = useState(false);

  const [priceToggle, setPriceToggle] = useState(false);

  const [filters, setFilters] = useState<BarFilters>({});

  const getTagsSelected = (tagsSelected: Array<TagWithStatus>) => {
    const tagsFilter = tagsSelected.map((t) => t.name);
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        tags: tagsFilter,
      };
    });
    setTagsToggle(false);
  };

  const getPricesRange = (priceRange: PriceRange) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        priceRange,
      };
    });
    setPriceToggle(false);
  };

  const emitFilters = () => {
    getFilters(filters);
  };

  const closePriceFilter =() => {
    setPriceToggle(false);
  }
  const closeTagsFilter = () => {
    setTagsToggle(false);
  }

  const getPriceFilterText = () => {
    const max = filters?.priceRange?.max;
    const min = filters?.priceRange?.min;
    const priceFilterSetted = (max && max !== 20000) || (min && min !== 0);
    const maxPriceText = max !== 20000 ? max?.toString() : "Sin límite";
    return priceFilterSetted
      ? `Precios entre: ${min?.toString()}€ y ${maxPriceText}€`
      : "Precio";
  };

  const getTagsFilterText = () => {
    const priceFilterSetted = filters?.tags;
    return priceFilterSetted?.length > 0
      ? `${priceFilterSetted?.join(", ")}`
      : "Selecciona uno o más tags";
  };

  return (
    <div className="block sticky top-[66px] text-left">
      <div className="flex items-center w-full h-full bg-white overflow-auto px-[1rem] py-[0.5rem]">
        <div className="m-[0.25rem]">
          <div className="flex shadow-md shadow-gray-400/20 bg-white h-[36px] rounded-[21px] items-center justify-center px-[1rem] hover:bg-slate-100">
            <button
              className="basis-full overflow-hidden px-1 items-center justify-center cursor-pointer flex"
              onClick={() => {
                setTagsToggle(!tagsToggle);
                setPriceToggle(false);
              }}
            >
              <div className="text-[.875rem]">{getTagsFilterText()} </div>
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
              onClick={() => {
                setPriceToggle(!priceToggle);
                setTagsToggle(false);
              }}
            >
              <div className="pr-2">
                <AiOutlineDollarCircle />
              </div>
              <div className="text-[.875rem]">{getPriceFilterText()}</div>
              <div className="pl-2">
                {priceToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>
          </div>
        </div>

        <div className="m-[0.25rem]">
          <div className="flex shadow-md shadow-gray-400/20 bg-[#13c1ac] hover:bg-[#0f9989]  h-[36px] rounded-[21px] items-center justify-center px-[1rem]">
            <button className="basis-full overflow-hidden px-1 items-center justify-center cursor-pointer flex">
              <div className="text-[.875rem] text-white" onClick={emitFilters}>
                Buscar
              </div>
            </button>
          </div>
        </div>
      </div>

      {tagsToggle && (
        <TagsFilter
          getTagsSelected={getTagsSelected}
          closeFilter={closeTagsFilter}
        />
      )}

      {priceToggle && (
        <PriceFilter
          closeFilter={closePriceFilter}
          getPricesRange={getPricesRange}
        />
      )}
    </div>
  );
};

export default Filter;
