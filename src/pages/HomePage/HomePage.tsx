import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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
      <Header />
      <div className={style.homepageWrapper}>HomePage</div>

      {/* //TODO: BORRAR EJEMPLO PETICION*/}
      <ul>
        {ads.map((ad: any) => {
          return <li key={ad._id}><strong>{ad.name}</strong></li>;
        })}
      </ul>
      <Footer />
    </>
  );
};

export default HomePage;
