import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Login from "../../components/login/Login";
import { useEffect, useState } from "react";

const style = {
  homepageWrapper: "flex w-full h-screen bg-gray-500",
};

async function getAdvertisements() {
  let httpResponse;
  let advertisements;
  try {
    //TODO: EL FQDN "http://localhost:3000" DEBERÍA SER UNA VARIABLE DE ENTORNO PARA QUE SE PEUEDA CONFIGURAR DESDE EL SERVIDOR
    //UISAR DOTENV
    httpResponse = await fetch("http://localhost:3000/advertisements");
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
          return <li>{ad.name}</li>;
        })}
      </ul>
      <Footer />
    </>
  );
};

export default HomePage;
