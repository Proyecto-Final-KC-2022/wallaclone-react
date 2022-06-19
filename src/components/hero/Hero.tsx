import Barbecue from "../../images/barbecue.png"
import Garden from "../../images/garden.png"
import Scooter from "../../images/scooter.png"
import Bicycle from "../../images/bicycle.png"
import Mountain from "../../images/mountain.png"
import Road from "../../images/road_bike.png"


const Hero = () => {
  return (
    <>
        <div className="w-full text-center px-[10px]">
            <h2 className="text-[2.25rem] font-[700]">¡Bienvenido verano!</h2>
            <div className="text-[#607D8B]">Más de 20.000 productos para disfrutar</div>
            <div className="mt-[32px] flex flex-wrap items-center justify-center gap-2">

                <div className="mb-[16px] flex max-w-1/5 cursor-pointer">
                    <div className="text-left rounded-[5px] px-[8px] pt-[4px] pb-[16px] overflow-hidden bg-white">
                        <img className="rounded-[4px] w-full h-[194px] object-cover" src={Barbecue} />
                        <h3 className="text-[1.25rem] text-[#253238] font-[700] overflow-hidden">Barbacoa</h3>
                        <div className="mt-[2px] text-[#90A4A]">16.825 anuncios</div>
                    </div>
                </div>

                <div className="mb-[16px] flex max-w-1/5 cursor-pointer">
                    <div className="text-left rounded-[5px] px-[8px] pt-[4px] pb-[16px] overflow-hidden bg-white">
                        <img className="rounded-[4px] w-full h-[194px] object-cover" src={Garden} />
                        <h3 className="text-[1.25rem] text-[#253238] font-[700] overflow-hidden">Muebles de Jardín</h3>
                        <div className="mt-[2px] text-[#90A4A]">4.848 anuncios</div>
                    </div>
                </div>

            </div>
        </div>

        <div className="w-full justify-center text-center px-[10px]">
            <h2 className="text-[2.25rem] font-[700]">Productos destacados del momento</h2>

            <div className="mt-[32px] flex flex-wrap items-center justify-center gap-2">

                <div className="mb-[16px] flex max-w-1/5 cursor-pointer">
                    <div className="text-left rounded-[5px] px-[8px] pt-[4px] pb-[16px] overflow-hidden bg-white">
                        <img className="rounded-[4px] w-full h-[194px] object-cover" src={Scooter} />
                        <h3 className="text-[1.25rem] text-[#253238] font-[700] overflow-hidden">Patinete eléctrico</h3>
                        <div className="mt-[2px] text-[#90A4A]">22.955 anuncios</div>
                    </div>
                </div>

                <div className="mb-[16px] flex max-w-1/5 cursor-pointer">
                    <div className="text-left rounded-[5px] px-[8px] pt-[4px] pb-[16px] overflow-hidden bg-white">
                        <img className="rounded-[4px] w-full h-[194px] object-cover" src={Bicycle} />
                        <h3 className="text-[1.25rem] text-[#253238] font-[700] overflow-hidden">Bicicleta estática</h3>
                        <div className="mt-[2px] text-[#90A4A]">10.161 anuncios</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full justify-center text-center px-[10px]">

            <div className="mt-[32px] flex flex-wrap items-center justify-center gap-2">

                <div className="mb-[16px] flex max-w-1/5 cursor-pointer">
                    <div className="text-left rounded-[5px] px-[8px] pt-[4px] pb-[16px] overflow-hidden bg-white">
                        <img className="rounded-[4px] w-full h-[194px] object-cover" src={Mountain} />
                        <h3 className="text-[1.25rem] text-[#253238] font-[700] overflow-hidden">Patinete eléctrico</h3>
                        <div className="mt-[2px] text-[#90A4A]">22.955 anuncios</div>
                    </div>
                </div>

                <div className="mb-[16px] flex max-w-1/5 cursor-pointer">
                    <div className="text-left rounded-[5px] px-[8px] pt-[4px] pb-[16px] overflow-hidden bg-white">
                        <img className="rounded-[4px] w-full h-[194px] object-cover" src={Road} />
                        <h3 className="text-[1.25rem] text-[#253238] font-[700] overflow-hidden">Bicicleta estática</h3>
                        <div className="mt-[2px] text-[#90A4A]">10.161 anuncios</div>
                    </div>
                </div>

            </div>
            
        </div>
    </>

    
  )
}

export default Hero