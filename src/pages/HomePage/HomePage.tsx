import { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/header/Navbar"
import Carousel from "../../components/carousel/Carousel"
import Hero from "../../components/hero/Hero"
import Login from "../../components/login/Login";

const style = {
  homepageWrapper: "flex-col w-full min-h-[100vh] bg-white block items-center justify-center text-center",
};

const HomePage = () => {
  const [loginModal, setLoginModal] = useState(false);
  const onClickLoginButton = ()=>{
    setLoginModal(true);
  }
  return (
    <>
      <Header onClickLoginButton={onClickLoginButton} />
        <div className={style.homepageWrapper}>
          <span className="text-[1rem] text-[#607D8B] font-light pt-[16px]">
            wallaclone, la plataforma líder de compraventa de productos de Segunda mano
          </span>
          <div className="pt-[16px] block ">
            <div className="font-bold text-[2.25rem] leading-normal pb-[32px]">¿Qué estás buscando hoy?</div>
            <div className="pb-[32px] px-4 items-center">
              <Carousel /> 
            </div>
            <div className="bg-gray-300 w-full min-h-[100vh] items-center justify-center pt-[60px] pb-[44px]">
              <Hero />
            </div>
          </div>
        </div>
      <Login open={loginModal} onClose={() => setLoginModal(false)} />
      <Footer />
      <Navbar />
    </>
  );
};

export default HomePage;

/* import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/header/Navbar"
import Carousel from "../../components/carousel/Carousel"
import Hero from "../../components/hero/Hero"

import Login from "../../components/login/Login";
import { useEffect, useState } from "react";

const style = {
  homepageWrapper: "flex w-full h-screen bg-gray-500",
};
//TODO: BORRAR FUNCION DE EJEMPLO, SOLO PARA PROBAR CONEXION, SACAR A UN SERVICIO LAS LLAMADAS A APIS
async function getAdvertisements() {
  let httpResponse;
  let advertisements;
  //TODO: SACAR A OTRO ARCHIVO
  const FQDN = import.meta.env.VITE_REACT_APP_API_BASE_URL || 'http://localhost:3000';
  try {
    httpResponse = await fetch(`${FQDN}/advertisements`);
  } catch (error) {
    throw new Error("ERROR IN HTTP REQUEST");
  }

  if (!httpResponse.ok) {
    throw new Error(
      `Anuncios no encontrados. Status => ${httpResponse.status}`
    );
  }

  try {
    advertisements = await httpResponse.json();
  } catch (error) {
    throw new Error("ERROR FORMATTING TO JSON");
  }

  return advertisements;
}

const HomePage = () => {
  const [loginModal, setLoginModal] = useState(false);
  const onClickLoginButton = ()=>{
    setLoginModal(true);
  }

  //TODO: BORRAR ESTO CUANDO SE LE META LOGICA
  const [ads, setAds] = useState([]);

  useEffect(() => {
    (async function fetchTweets() {
      try {
        const adstList = await getAdvertisements();
        setAds(adstList);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <Header onClickLoginButton={onClickLoginButton} />
      <div className={style.homepageWrapper}>
          <span className="text-[1rem] text-[#607D8B] font-light pt-[16px]">
            wallaclone, la plataforma líder de compraventa de productos de Segunda mano
          </span>
          <div className="pt-[16px] block ">
            <div className="font-bold text-[2.25rem] leading-normal pb-[32px]">¿Qué estás buscando hoy?</div>
            <div className="pb-[32px] px-4 items-center">
              <Carousel /> 
            </div>
            <div className="bg-gray-300 w-full min-h-[100vh] items-center justify-center pt-[60px] pb-[44px]">
              <Hero />
            </div>
          </div>
        </div> 

      //TODO: BORRAR EJEMPLO PETICION
      <ul>
        {ads.map((ad: any) => {
          return <li key={ad._id}><strong>{ad.name}</strong></li>;
        })}
      </ul>
      <Footer />
    </>
  );
};

export default HomePage; */
