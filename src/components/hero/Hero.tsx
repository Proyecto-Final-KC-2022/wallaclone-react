import Barbecue from "../../images/barbecue.png"
import Garden from "../../images/garden.png"

const Hero = () => {
  return (
    <div className="w-full text-center px-[10px]">
        <h2 className="text-[2.25rem] font-[700]">¡Bienvenida verano!</h2>
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
  )
}

export default Hero