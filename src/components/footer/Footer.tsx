import { Link } from "react-router-dom";
import FooterStyles from "../../styles/FooterStyles";

const Footer = () => {
  return (
    <div className={FooterStyles.footerWrapper}>
      <div className={FooterStyles.footerContainer}>
        <div className={FooterStyles.logoWrapper}>
          <div className={FooterStyles.logoContainer}>Wallaclone</div>
          <span className={FooterStyles.copyrightText}>
            Copyright &copy; 2022 Wallaclone &copy; de sus respectivos
            propietarios
          </span>
        </div>
        <div className={FooterStyles.linksWrapper}>
          <div className={FooterStyles.linksContainer}>
            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Wallaclone</div>
              <ul>
                <li className={FooterStyles.links}>
                  <Link to="/404" className={FooterStyles.linksText}>
                    Quienes somos
                  </Link>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Cómo funciona</a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Brand Book</a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Prensa</a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Empleo</a>
                </li>
              </ul>
            </div>

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Soporte</div>
              <ul>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Preguntas frecuentes</a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>
                    Reglas de publicación
                  </a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>
                    Consejos de seguridad
                  </a>
                </li>
              </ul>
            </div>

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Legal</div>
              <ul>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Condiciones de uso</a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>
                    Política de privacidad
                  </a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Cookies</a>
                </li>
              </ul>
            </div>

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Motor</div>
              <ul>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Particulares</a>
                </li>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Profesionales</a>
                </li>
              </ul>
            </div>

            <div className={FooterStyles.linksBlock}>
              <div className={FooterStyles.linksTitle}>Wallaclone PRO</div>
              <ul>
                <li className={FooterStyles.links}>
                  <a className={FooterStyles.linksText}>Impulsa tu negocio</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
