import Img from "../../images/bmw-serie2.jpg"
import ProductDetails from "./ProductDetails";
const style = {};

const ProductCard = () => {
  return (
    <div className="flex bg-white w-full rounded-[10px] border border-gray-300 overflow-hidden mb-2">
      <div className="flex items-center px-1 py-1">
        <img src={Img} className="rounded-[10px] h-[196px] w-full" />
      </div>
      <div className="m-0 p-0 block w-2/3">
        <ProductDetails />
      </div>
    </div> 
  );
};

export default ProductCard;
