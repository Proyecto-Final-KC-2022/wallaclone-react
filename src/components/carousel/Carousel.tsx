import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import All from "../../images/category_All.png"
import Cars from "../../images/category_Cars.png"
import Motorbike from "../../images/category_Motorbike.png"
import MotorAcc from "../../images/category_MotorAccessories.png"
import FashionAcc from "../../images/category_FashionAccessories.png"
import RealEst from "../../images/category_RealEstate.png"
import TvAudio from "../../images/category_TVAudioCameras.png"
import CellPhones from "../../images/category_CellPhonesAccessories.png"
import Computers from "../../images/category_ComputersElectronic.png"
import Sports from "../../images/category_SportsLeisure.png"
import Bikes from "../../images/category_Bikes.png"
import Games from "../../images/category_GamesConsoles.png"
import Home from "../../images/category_HomeGarden.png"
import Appliances from "../../images/category_Appliances.png"
import Books from "../../images/category_GamesBooks.png"
import Babies from "../../images/category_BabiesChild.png"
import Collectibles from "../../images/category_CollectiblesArt.png"
import Construction from "../../images/category_Construction.png"
import Agriculture from "../../images/category_AgricultureIndustrial.png"
import Jobs from "../../images/category_Jobs.png"
import Services from "../../images/category_Services.png"

const style = {
  swiperContainer: "items-center justify-center px-10 flex",
  swiperSlideWrapper: "hover:border rounded-[10px] items-center justify-center text-center text-[#90A4AE] hover:text-[#13c1ac] w-[130px] h-[152px] flex-col py-4",
  imgWrapper: "flex justify-center items-center w-full",
  imgContainer: "w-[68px]",
  swiperText: "text-center text-[1rem] py-[16px] w-full"
}

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={60}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[ Navigation]}
        className={style.swiperContainer}
      >
        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={All} /> 
          </div>
          <span className={style.swiperText}>Todas las categorías</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Cars} /> 
          </div>
          <span className={style.swiperText}>Coches</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Motorbike} /> 
          </div>
          <span className={style.swiperText}>Motos</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={MotorAcc} /> 
          </div>
          <span className={style.swiperText}>Motor y Accesorios</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={FashionAcc} /> 
          </div>
          <span className={style.swiperText}>Moda y Accesorios</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={RealEst} /> 
          </div>
          <span className={style.swiperText}>Inmobiliaria</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={TvAudio} /> 
          </div>
          <span className={style.swiperText}>TV, Audio y Foto</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={CellPhones} /> 
          </div>
          <span className={style.swiperText}>Móviles y Telefonía</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Computers} /> 
          </div>
          <span className={style.swiperText}>Informática y Electrónica</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Sports} /> 
          </div>
          <span className={style.swiperText}>Deporte y Ocio</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Bikes} /> 
          </div>
          <span className={style.swiperText}>Bicicletas</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Games} /> 
          </div>
          <span className={style.swiperText}>Consolas y Videojuegos</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Home} /> 
          </div>
          <span className={style.swiperText}>Hogar y Jardín</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Appliances} /> 
          </div>
          <span className={style.swiperText}>Electrodomésticos</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Books} /> 
          </div>
          <span className={style.swiperText}>Cine, Libros y Música</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Babies} /> 
          </div>
          <span className={style.swiperText}>Niños y Bebés</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Collectibles} /> 
          </div>
          <span className={style.swiperText}>Coleccionismo</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Construction} /> 
          </div>
          <span className={style.swiperText}>Construcción y Reformas</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Agriculture} /> 
          </div>
          <span className={style.swiperText}>Industria y Agricultura</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Jobs} /> 
          </div>
          <span className={style.swiperText}>Empleo</span>
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlideWrapper}>
          <div className={style.imgWrapper}>
            <img className={style.imgContainer} src={Services} /> 
          </div>
          <span className={style.swiperText}>Servicios</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
