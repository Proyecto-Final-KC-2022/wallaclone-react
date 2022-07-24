import { Link } from "react-router-dom";
import FooterStyles from "../../styles/FooterStyles";

const Footer = () => {
  return (
    <div className={FooterStyles.footerWrapper}>
      <div className={FooterStyles.footerContainer}>
        <div className={FooterStyles.logoWrapper}>
          <div className={FooterStyles.logoContainer}>Wallaclone</div>
          <span className={FooterStyles.copyrightText}>Copyright &copy; 2022 Wallaclone &copy; de sus respectivos propietarios</span>
        </div>
        <div className={FooterStyles.linksWrapper}>
          <div className={FooterStyles.linksContainer}>

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Wallaclone</div>
              <ul>
                <li className="pt-[16px]">
                  <Link to="/404" className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Quienes somos</Link>
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

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Soporte</div>
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

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Legal</div>
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

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Motor</div>
              <ul>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Particulares</a>
                </li>
                <li className="pt-[16px]">
                  <a className="text-[.875rem] text-[#90A4AE] hover:text-[#13c1ac] cursor-pointer">Profesionales</a>
                </li>
              </ul>
            </div>

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Wallaclone PRO</div>
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