import * as React from "react";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useComponentVisible from "../../hooks/useComponentVisible";
import PriceFilterResponsive from "./PriceFilterResponsive";
import PriceFilterStyles from "../../styles/PriceFilterStyles";

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
  initialValues,
}: {
  getPricesRange: (priceRage: PriceRange) => void;
  closeFilter: () => void;
  initialValues: PriceRange;
}) => {
  const [value, setValue] = React.useState<number[]>(
    (initialValues && [initialValues.min, initialValues.max]) || [
      MIN_VALUE,
      MAX_VALUE,
    ]
  );
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
      <div ref={ref} className={PriceFilterStyles.priceFilterWrapper}>
        <div className={PriceFilterStyles.priceFilterHeader}>
          <p className={PriceFilterStyles.headerText}>¿Cuánto quieres pagar?</p>
        </div>
        <div className={PriceFilterStyles.formWrapper}>
          <div className={PriceFilterStyles.formContainer}>
            <div className={PriceFilterStyles.boxWrapper}>
              <form className={PriceFilterStyles.boxContainer}>
                <Box
                  className={PriceFilterStyles.boxSlider}
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
              <div className={PriceFilterStyles.inputsWrapper}>
                <div className={PriceFilterStyles.fromInputContainer}>
                  <label className={PriceFilterStyles.inputLabel}>Desde</label>
                  <input
                    className={PriceFilterStyles.inputsContainer}
                    type="text"
                    value={valuetext(value[0])}
                    onChange={setMinValue}
                  />
                </div>

                <div className={PriceFilterStyles.toInputContainer}>
                  <label className={PriceFilterStyles.inputLabel}>Hasta</label>
                  <input
                    className={PriceFilterStyles.inputsContainer}
                    type="text"
                    value={valuetext(value[1])}
                    onChange={setMaxValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={PriceFilterStyles.buttonsWrapper}>
          <button
            className={PriceFilterStyles.cancelButton}
            onClick={closeFilter}
          >
            Cancelar
          </button>
          <button
            className={PriceFilterStyles.applyButton}
            onClick={emitPriceRangeSelected}
          >
            Aplicar
          </button>
        </div>
      </div>

      {/* <PriceFilterResponsive /> */}
    </>
  );
};

export default PriceFilter;
