import { Link, useNavigate } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";

import NotFoundImg from "../../images/placeholder.png";
import { Advert } from "../../models/Advert.model";

const ProductCard2 = (advert: Advert) => {
  const navigate = useNavigate();
  const advertName =
    advert?.name?.toLowerCase()?.replaceAll(" ", "-") || "product_name";
  return (
    <div
      className="flex-col rounded-[10px] bg-white cursor-pointer overflow-hidden text-[0.875rem] px-1 pt-1 pb-4 w-full h-full border border-gray-300"
      onClick={() => navigate(`/product/${advertName}/${advert._id}`)}
    >
      <div className="bg-white rounded-[10px]">
        <div className="block">
          {/* TODO: De momento la imagen de notfound ya que ahora el cmapo imagen tiene strings random => seria algo asi { advert.image || NotFoundImg}*/}
          <img
            src={
              advert.image.includes(
                "https://wallaclone-s3-bucket.s3.amazonaws.com"
              )
                ? advert.image
                : NotFoundImg
            }
            className="rounded-[10px] h-[196px] w-full"
          />
        </div>
        <div className="block py-2 px-[0.75rem]">
          <div className="flex items-center gap-2 justify-between">
            <span className="font-[700] text-[1.25rem]">{advert.price} €</span>
            <div className="flex text-xl text-gray-400">
              <AiFillHeart />
            </div>
          </div>
        </div>
      </div>
      <div className="block px-[0.75rem] text-[0.875rem]">
        <p className="overflow-hidden">{advert.name}</p>
        <p className="overflow-hidden mt-0">{advert.description}</p>
      </div>
    </div>
  );
};

export default ProductCard2;
