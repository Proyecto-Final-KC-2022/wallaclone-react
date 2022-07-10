import * as React from "react";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useComponentVisible from "../../hooks/useComponentVisible";
import PriceFilterResponsive from "./PriceFilterResponsive";

const MIN_VALUE = 0;
const MAX_VALUE = 20000;

function valuetext(value: number) {
  return value >= MAX_VALUE ? "Sin límite" : `${value}€`;
}

export type PriceRange = {
  min: number;
  max: number;
};

const PriceFilter = ({
  getPricesRange,
  closeFilter,
}: {
  getPricesRange: (priceRage: PriceRange) => void;
  closeFilter: () => void;
}) => {
  const [value, setValue] = React.useState<number[]>([MIN_VALUE, MAX_VALUE]);
  const { ref, isComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    if (!isComponentVisible) {
      closeFilter();
    }
  }, [isComponentVisible]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const setMinValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const evtValue = event?.target?.value?.replace("€", "");
    const newMinValue =
      (Number(evtValue) !== NaN ? Number(evtValue) : value[0]) || MAX_VALUE;
    setValue((prev) => [newMinValue, prev[1]]);
  };
  const setMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const evtValue = event?.target?.value?.replace("€", "");
    const newMaxValue =
      (Number(evtValue) !== NaN ? Number(evtValue) : value[1]) || MAX_VALUE;
    setValue((prev) => [prev[0], newMaxValue]);
  };

  const emitPriceRangeSelected = () => {
    const priceRange: PriceRange = {
      min: value[0],
      max: value[1],
    };
    getPricesRange(priceRange);
  };
  return (
    <>
      <div
        ref={ref}
        className="hidden lg:block md:block fixed top-[130px] left-[234px] mx-[1rem] bg-white rounded-[10px] shadow-md overflow-hidden min-w-[380px]"
      >
        <div className="flex h-[70px] px-[1.5rem] items-center">
          <p className="font-bold m-0 block">¿Cuánto quieres pagar?</p>
        </div>
        <div className="overflow-auto px-[1.5rem] block">
          <div className="block">
            <form className="overflow-hidden block">
              <form className="flex items-center justify-center">
                <Box
                  className="py-[40px] px-[1.5rem] inline-block relative w-full"
                  sx={{ width: 332, color: "success.main" }}
                >
                  <Slider
                    getAriaLabel={() => "Rango de precios"}
                    value={value}
                    min={0}
                    max={20000}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                  />
                </Box>
              </form>
              <div className="mt-[1rem] flex items-center justify-center">
                <div className="mr-[0.5rem] w-full flex flex-col">
                  <label className="inline-block mb-[0.5rem]">Desde</label>
                  <input
                    className="rounded-[6px] text-[1rem] border border-[#CFD8DC] pl-[0.5rem] h-[50px] max-w-[158px] overflow-visible"
                    type="text"
                    value={valuetext(value[0])}
                    onChange={setMinValue}
                  />
                </div>

                <div className=" flex flex-col">
                  <label className="inline-block mb-[0.5rem]">Hasta</label>
                  <input
                    className="rounded-[6px] text-[1rem] border border-[#CFD8DC] pl-[0.5rem] h-[50px] max-w-[158px] overflow-visible"
                    type="text"
                    value={valuetext(value[1])}
                    onChange={setMaxValue}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-[88px] px-[1.5rem] items-center justify-end flex">
          <button
            className="py-[8px] px-[20px] cursor-pointer"
            onClick={closeFilter}
          >
            Cancelar
          </button>
          <button
            className="py-[8px] cursor-pointer text-white px-[20px] rounded-[25px] bg-[#13c1ac] hover:bg-[#0f9989] border border-[#13c1ac]"
            onClick={emitPriceRangeSelected}
          >
            Aplicar
          </button>
        </div>
      </div>

      <PriceFilterResponsive />
    </>
  );
};

export default PriceFilter;
