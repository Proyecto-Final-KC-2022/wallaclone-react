import { Link, useNavigate } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";

import Img from "../../images/bmw-serie2.jpg";

const ProductCard2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-col rounded-[10px] bg-white cursor-pointer overflow-hidden text-[0.875rem] px-1 pt-1 pb-4 w-full h-full border border-gray-300" onClick={() => navigate("/product/:id")}>
      <div className="bg-white rounded-[10px]">
        <div className="block">
          <img src={Img} className="rounded-[10px] h-[196px] w-full" />
        </div>
        <div className="block py-2 px-[0.75rem]">
          <div className="flex items-center gap-2 justify-between">
            <span className="font-[700] text-[1.25rem]">Precio €</span>
            <div className="flex text-xl text-gray-400">
              <AiFillHeart />
            </div>
          </div>
        </div>
      </div>
      <div className="block px-[0.75rem] text-[0.875rem]">
        <p className="overflow-hidden">Nombre</p>
        <p className="overflow-hidden mt-0">Descripción del producto</p>
      </div>
    </div>
  );
};

export default ProductCard2;
