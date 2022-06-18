import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/header/Navbar"
import Carousel from "../../components/carousel/Carousel"

import Login from "../../components/login/Login";

const style = {
  homepageWrapper: "flex-col w-full min-h-[100vh] bg-white block items-center justify-center text-center",
}

const HomePage = () => {
  return (
    <>
      <Header />
        <div className={style.homepageWrapper}>
          <span className="text-[1rem] text-[#607D8B] font-light pt-[16px]">
            wallaclone, la plataforma líder de compraventa de productos de Segunda mano
          </span>
          <div className="pt-[16px] block ">
            <div className="font-bold text-[2.25rem] leading-normal pb-[32px]">¿Qué estás buscando hoy?</div>
            <div className="pb-[32px] px-4 items-center">
              <Carousel /> 
            </div>
          </div>
        </div> 
      <Footer />
      <Navbar />
    </>  
  )
}

export default HomePage