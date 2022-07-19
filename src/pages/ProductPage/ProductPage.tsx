import React from "react";
import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLocationMarker, HiMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import Layout from "../../components/layout/Layout";

import Avatar from "../../images/avatar.png";
import Map from "../../images/map.png";
import Layout2 from "../../components/layout/Layout2";
import placeholder from "../../images/placeholder.png";

import { Advert } from "../../models/Advert.model";

import { getAdvert, deleteAdvert } from "./service";
import { useParams, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import useMutation from "../../hooks/useMutation";

const ProductPage = (advert: Advert): JSX.Element => {
  const { advertId } = useParams();
  console.log(advertId)
  const navigate = useNavigate(); // Redirección después del borrado.

  // ESTA PETICIÓN ESTÁ DEVOLVIENDO 500 PORQUE COGE COMO UNDEFINED EL ID DEL ANUNCIO.
  
  const getAdvertById = React.useCallback(
    () => getAdvert(advertId),
    [advertId]
  );

  const { isLoading, error} = useQuery(getAdvertById);
  const mutation = useMutation(deleteAdvert);

  const handleDelete = () => {
    mutation.execute(advertId).then(() => navigate("/"));
  };

  return (
    <>
      <Layout2>
        <div className='px-[15px] py-[15px] min-h-[100vh] bg-gray-200 items-center justify-center flex'>
          <div className='w-[681px] h-full'>
            <div className='bg-white rounded-[10px] px-[20px] pb-[32px] border border-[#ECEFF1]'>
              <div className='top-[65px] sticky bg-white items-center'>
                <div className='flex w-full py-[20px] justify-between'>
                  <a className='flex items-center max-w-[32%] cursor-pointer'>
                    <div className='float-left overflow-hidden w-[42px] h-[42px] rounded-full'>
                      <img src={Avatar} alt='Avatar' />
                    </div>
                    <div className='flex flex-col ml-[20px] justify-between h-[42px]'>
                      <h2 className='text-[1.25rem] font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis'>
                        <span>Usuario</span>
                      </h2>
                      <div className='text-[.875rem] text-[#607D8B] w-full overflow-hidden whitespace-nowrap text-ellipsis'>
                        Nº Productos
                      </div>
                    </div>
                  </a>
                  <div className='h-[42px] flex flex-col justify-between items-center text-center'>
                    <div className='m-0 p-0'>
                      <img
                        src='https://es.wallapop.com/images/icons/empty_star.svg'
                        className='inline-block w-[14px] h-[14px] mr-[8px]'
                      />
                      <img
                        src='https://es.wallapop.com/images/icons/empty_star.svg'
                        className='inline-block w-[14px] h-[14px] mr-[8px]'
                      />
                      <img
                        src='https://es.wallapop.com/images/icons/empty_star.svg'
                        className='inline-block w-[14px] h-[14px] mr-[8px]'
                      />
                      <img
                        src='https://es.wallapop.com/images/icons/empty_star.svg'
                        className='inline-block w-[14px] h-[14px] mr-[8px]'
                      />
                      <img
                        src='https://es.wallapop.com/images/icons/empty_star.svg'
                        className='inline-block w-[14px] h-[14px] mr-[8px]'
                      />
                    </div>
                    <div className='text-[.875rem] text-[#607D8B] w-full overflow-hidden whitespace-nowrap text-ellipsis flex '>
                      <span className='text-[#607D8B] font-bold mr-2'>0</span>
                      Valoraciones
                    </div>
                  </div>
                  <div className='m-0 p-0'>
                    <a className='inline-flex items-center justify-center cursor-pointer bg-[#ECEFF1] hover:bg-red-400 rounded-[20px] py-[12px] px-[30px] mr-[8px] text-2xl text-red-700'>
                      <AiOutlineHeart />
                    </a>
                  </div>
                  <div className='flex items-center justify-center'>
                    <a className='bg-[#13C1AC] hover:bg-[#0f9989] py-[12px] px-[20px] whitespace-nowrap inline-block cursor-pointer rounded-[20px] text-white'>
                      Chat
                    </a>
                  </div>
                </div>
              </div>

              <div className='w-full h-full overflow-hidden rounded-[2%]'>
                <div className='w-auto cursor-pointer'>
                  <img
                    className='w-full h-full object-cover rounded-[10px]'
                    src={advert.image || placeholder}
                    width='200'
                    height='200'
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className='max-w-[636px] pt-[20px] overflow-hidden'>
                <div className='flex flex-col'>
                  <div className='mb-[8px]'>Precio</div>
                  <span className='text-[2rem] font-bold inline-block'>
                    {advert.price} €
                  </span>
                  <h1 className='text-[2rem] pb-[16px] border-b mt-[8px] overflow-hidden text-ellipsis'>
                    Nombre: {advert.name}
                  </h1>
                  <p className='leading-normal py-[20px] text-[1rem] break-words border-b'>
                    {advert.description}
                  </p>

                  <div className='text-[1rem] text-[#90A4AE] py-[16px] border-b'>
                    <div className='inline-block'>
                      Fecha: {advert.creationDate}
                    </div>
                    <div className='float-right flex items-center'>
                      <i className='text-2xl mr-[4px]'>
                        <AiOutlineHeart />
                      </i>
                      <span className='text-xl'>0</span>
                    </div>
                  </div>

                  <div className='flex items-center py-[20px] text-[1rem]'>
                    <i className='text-2xl text-[#90A4AE] mr-[8px]'>
                      <HiOutlineLocationMarker />
                    </i>
                    <a className='hover:text-[#13c1ac]'>Localización</a>
                  </div>
                </div>
              </div>

              <div>
                <div className='mb-[20px] rounded-[10px] inline-block overflow-hidden w-full'>
                  <img className='w-full h-[120px] object-cover' src={Map} />
                </div>
              </div>

              <div className='text-center flex justify-center w-full'>
                <span className='text-[#90A4AE] text-[.875rem]'>
                  Comparte este producto con tus amigos
                </span>
              </div>

              <div className='mt-[20px] text-center items-center flex w-full justify-center gap-4'>
                <a className='text-center text-3xl cursor-pointer px-2 py-2 rounded-full bg-blue-800 text-white'>
                  <FaFacebookF />
                </a>
                <a className='text-center text-3xl cursor-pointer px-2 py-2 rounded-full bg-blue-500 text-white'>
                  <FaTwitter />
                </a>
                <a className='text-center text-3xl cursor-pointer px-2 py-2 rounded-full bg-[#f86767] text-white'>
                  <HiMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
};

export default ProductPage;
