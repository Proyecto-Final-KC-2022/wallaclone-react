import Img from "../../images/bmw-serie2.jpg"
import ProductDetails from "./ProductDetails";
const style = {};

const ProductCard = () => {
  return (
    <div className="flex bg-white w-[684px] h-[202px] rounded-[10px] border mb-[12px] overflow-hidden">
      <div className="flex items-center pl-2">
        <img src={Img} className="rounded-[10px] h-[196px] w-[268px]" />
      </div>
      <div className="m-0 p-0 block">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductCard;
