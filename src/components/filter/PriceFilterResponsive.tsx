import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}€`;
}

const PriceFilterResponsive = () => {
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="block md:hidden left-0 right-0 top-[66px] w-full h-full min-w-auto fixed bg-white overflow-hidden">
      <div className="flex h-[70px] px-[1.5rem] items-center">
        <p className="font-bold m-0 block">¿Cuánto quieres pagar?</p>
      </div>
      <div className="overflow-auto px-[1.5rem] block">
        <div className="block">
          <form className="overflow-hidden block">
            <form className="flex items-center justify-center">
              <Box
                className="py-[40px] px-[1.5rem] inline-block relative w-full"
                sx={{ width: 500, color: "success.main" }}
              >
                <Slider
                  getAriaLabel={() => "Rango de precios"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </form>
            <div className="mt-[1rem] flex items-center justify-center">
              <div className="mr-[0.5rem] w-full flex flex-col">
                <label className="inline-block mb-[0.5rem]">Desde</label>
                <input
                  className="rounded-[6px] text-[1rem] border border-[#CFD8DC] pl-[0.5rem] h-[50px] max-w-[300px] overflow-visible"
                  placeholder="{value}"
                />
              </div>

              <div className="w-full flex flex-col">
                <label className="inline-block mb-[0.5rem]">Hasta</label>
                <input
                  className="rounded-[6px] text-[1rem] border border-[#CFD8DC] pl-[0.5rem] h-[50px] max-w-[300px] overflow-visible"
                  placeholder="{value}"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[88px] px-[1.5rem] items-center justify-end flex">
        <button className="py-[8px] px-[20px] cursor-pointer">Cancelar</button>
        <button className="py-[8px] cursor-pointer text-white px-[20px] rounded-[25px] bg-[#13c1ac] hover:bg-[#0f9989] border border-[#13c1ac]">
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default PriceFilterResponsive;
