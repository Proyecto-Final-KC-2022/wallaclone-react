const style = {
    footerWrapper: "block w-full h-full bg-white border-t-[2px] border-gray-200 px-[10px] mx-auto"
}

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className="pt-[60px] flex pb-[44px] mx-[10px]">
        <div className="max-w-[20%] mb-[44px] flex w-full relative px-[10px]">
          <img className="max-w-full mb-[16px] block" />
          <span className="text-[#607D8B] text-[.75rem]">Copyright &copy; 2022 Wallaclone &copy; de sus respectivos propietarios</span>
        </div>
        <div className="max-w-full relative w-full px-[10px]">
          <div className="flex flex-wrap mx-[10px] justify-between">

            <div className="mb-[16px]">
              <div className="text-[#607D8B] font-bold">Wallaclone</div>
              <ul>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Quienes somos</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Cómo funciona</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Brand Book</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Prensa</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Empleo</a>
                </li>
              </ul>
            </div>

            <div className="mb-[16px]">
              <div className="text-[#607D8B] font-bold">Soporte</div>
              <ul>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Preguntas frecuentes</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Reglas de publicación</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Consejos de seguridad</a>
                </li>
              </ul>
            </div>

            <div className="mb-[16px]">
              <div className="text-[#607D8B] font-bold">Legal</div>
              <ul>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Condiciones de uso</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Política de privacidad</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Cookies</a>
                </li>
              </ul>
            </div>

            <div className="mb-[16px]">
              <div className="text-[#607D8B] font-bold">Motor</div>
              <ul>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Particulares</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Profesionales</a>
                </li>
              </ul>
            </div>

            <div className="mb-[16px]">
              <div className="text-[#607D8B] font-bold">Wallaclone PRO</div>
              <ul>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Impulsa tu negocio</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer