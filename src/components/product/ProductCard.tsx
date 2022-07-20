import { any } from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import Img from "../../images/bmw-serie2.jpg";
import ProductDetails from "./ProductDetails";
const style = {};

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className='flex bg-white w-full rounded-[10px] border border-gray-300 overflow-hidden mb-2'
      onClick={() => navigate("/product/:id")}
    >
      <div className='flex items-center px-1 py-1'>
        <img src={Img} className='rounded-[10px] h-[196px] w-full' />
      </div>
      <div className='m-0 p-0 block w-2/3'>
        <ProductDetails name={any} sale={any} price={any} tags={any} photo={any} description={any} onDelete={any}/>
      </div>
    </div>
  );
};

export default ProductCard;
