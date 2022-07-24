import { useState } from "react";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import TagsFilter, { TagWithStatus } from "./TagsFilter";
import PriceFilter, { PriceRange } from "./PriceFilter";
import FilterBarStyles from "../../styles/FilterBarStyles";
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

  const closePriceFilter = () => {
    setPriceToggle(false);
  };
  const closeTagsFilter = () => {
    setTagsToggle(false);
  };

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
    <div className={FilterBarStyles.filterBarWrapper}>
      <div className={FilterBarStyles.filterBarContainer}>
        <div className={FilterBarStyles.buttonWrapper}>
          <div className={FilterBarStyles.buttonContainer}>
            <button
              className={FilterBarStyles.filterButton}
              onClick={() => {
                setTagsToggle(!tagsToggle);
                setPriceToggle(false);
              }}
            >
              <div className={FilterBarStyles.filterText}>
                {getTagsFilterText()}
              </div>
              <div className={FilterBarStyles.filterToggle}>
                {tagsToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>
          </div>
        </div>

        <div className={FilterBarStyles.buttonWrapper}>
          <div className={FilterBarStyles.buttonContainer}>
            <button
              className={FilterBarStyles.filterButton}
              onClick={() => {
                setPriceToggle(!priceToggle);
                setTagsToggle(false);
              }}
            >
              <div className={FilterBarStyles.priceIcon}>
                <AiOutlineDollarCircle />
              </div>
              <div className={FilterBarStyles.filterText}>
                {getPriceFilterText()}
              </div>
              <div className={FilterBarStyles.filterToggle}>
                {priceToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>
          </div>
        </div>

        <div className={FilterBarStyles.buttonWrapper}>
          <div className={FilterBarStyles.findButtonContainer}>
            <button className={FilterBarStyles.filterButton}>
              <div className={FilterBarStyles.findText} onClick={emitFilters}>
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
