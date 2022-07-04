import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import HeaderStyles from "./HeaderStyles";

import Logo from "../../images/logo.png";
import LanguageButton from "../common/LanguageButton";
import MailBoxButton from "../common/MailBoxButton";
import UploadButton from "../common/UploadButton";
import LoginButton from "../common/LoginButton";

const Header = ({ onClickModalButton }: { onClickModalButton: Function }) => {
  const navigate = useNavigate();

  return (
    <div className={HeaderStyles.navWrapper}>
      <div className={HeaderStyles.navContainer}>
        <div className={HeaderStyles.logoWrapper}>
          <Link to="/" className={HeaderStyles.logoContainer}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={HeaderStyles.searchbarWrapper}>
          <div className={HeaderStyles.searchbarContainer}>
            <div className={HeaderStyles.inputWrapper}>
              <div className={HeaderStyles.searchIcon}>
                <AiOutlineSearch />
              </div>
              <input
                className={HeaderStyles.placeholderWrapper}
                type="text"
                placeholder="Buscar en Todas las categorías"
              />
            </div>
          </div>
        </div>
        <div className={HeaderStyles.headerItemsWrapper}>
          <div className={HeaderStyles.headerItem}>
            <LanguageButton />
          </div>
          <Link to="/category" className={HeaderStyles.headerItem}>
            <MailBoxButton />
          </Link>
          <div className={HeaderStyles.headerItem}>
            <LoginButton onClickModalButton={onClickModalButton} />
          </div>
          <div className={HeaderStyles.headerItem}>
            <UploadButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
