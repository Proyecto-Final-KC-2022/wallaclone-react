import { AiOutlineHeart } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import Avatar from "../../images/avatar.png";
import Map from "../../images/map.png";
import ProductPageLayout from "../../components/layout/ProductPageLayout";
import placeholder from "../../images/placeholder.png";

import { getAdvert, deleteAdvert } from "./service";
import { useParams, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import useMutation from "../../hooks/useMutation";
import AdvertisementService from "../../api/service/Advertisement.service";
import storage from "../../utils/storage";
import { parseJwt } from "../../utils/utils";

const ProductPage = (): JSX.Element => {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: advert,
  } = useQuery(AdvertisementService.getAdvert, advertId);
  const mutation = useMutation(deleteAdvert);

  const auth = storage.get("auth") || storage.getSession("auth");
  const jwtToken = auth?.replace('"', "");
  const userId = jwtToken && parseJwt<{ _id?: string }>(jwtToken)?._id;

  const navigateToChat = () => {
    navigate(`/account/chat?advertid=${advertId}`);
  };

  const handleDelete = () => {
    mutation.execute(advertId).then(() => navigate("/"));
  };

  return (
    <>
      <ProductPageLayout>
        <div className="px-[15px] py-[15px] min-h-[100vh] bg-gray-200 items-center justify-center flex">
          <div className="w-[681px] h-full">
            {advert && (
              <div className="bg-white rounded-[10px] px-[20px] pb-[32px] border border-[#ECEFF1]">
                <div className="top-[65px] sticky bg-white items-center">
                  <div className="flex w-full py-[20px] justify-between">
                    <a className="flex items-center max-w-[32%] cursor-pointer">
                      <div className="float-left overflow-hidden w-[42px] h-[42px] rounded-full">
                        <img src={Avatar} alt="Avatar" />
                      </div>
                      <div className="flex flex-col ml-[20px] justify-between h-[42px]">
                        <h2 className="text-[1.25rem] font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis">
                          <span>{advert?.owner?.name}</span>
                        </h2>
                      </div>
                    </a>

                    <div className="flex">
                      <div className="m-0 p-0">
                        <a className="inline-flex items-center justify-center cursor-pointer bg-[#ECEFF1] hover:bg-red-400 rounded-[20px] py-[12px] px-[30px] mr-[8px] text-2xl text-red-700">
                          <AiOutlineHeart />
                        </a>
                      </div>

                      {userId && advert?.owner?._id !== userId && (
                        <div
                          className="flex items-center justify-center"
                          onClick={navigateToChat}
                        >
                          <a className="bg-[#13C1AC] hover:bg-[#0f9989] py-[12px] px-[20px] whitespace-nowrap inline-block cursor-pointer rounded-[20px] text-white">
                            Chat
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full h-full overflow-hidden rounded-[2%]">
                  <div className="w-auto cursor-pointer">
                    <img
                      className="w-full h-full object-cover rounded-[10px]"
                      src={advert.image || placeholder}
                      width="200"
                      height="200"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                <div className="max-w-[636px] pt-[20px] overflow-hidden">
                  <div className="flex flex-col">
                    <span className="text-[2rem] font-bold inline-block">
                      {advert.price} €
                    </span>
                    <h1 className="text-[2rem] pb-[16px] border-b mt-[8px] overflow-hidden text-ellipsis">
                      {advert.name}
                    </h1>
                    <p className="leading-normal py-[20px] text-[1rem] break-words border-b">
                      {advert.description}
                    </p>

                    <div className="text-[1rem] text-[#90A4AE] py-[16px] border-b">
                      <div className="inline-block">
                        Fecha:{" "}
                        {advert.creationDate.replace("T", " ").slice(0, -8)} h.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center flex justify-center w-full">
                  <span className="text-[#90A4AE] text-[.875rem]">
                    Comparte este producto con tus amigos
                  </span>
                </div>

                <div className="mt-[20px] text-center items-center flex w-full justify-center gap-4">
                  <a
                    href="https://www.facebook.com/"
                    className="text-center text-3xl cursor-pointer px-2 py-2 rounded-full bg-blue-800 text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com/"
                    className="text-center text-3xl cursor-pointer px-2 py-2 rounded-full bg-blue-500 text-white"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://mail.google.com/"
                    className="text-center text-3xl cursor-pointer px-2 py-2 rounded-full bg-[#f86767] text-white"
                  >
                    <HiMail />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </ProductPageLayout>
    </>
  );
};

export default ProductPage;
