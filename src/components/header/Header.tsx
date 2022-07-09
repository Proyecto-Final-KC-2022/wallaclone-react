import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import HeaderStyles from "./HeaderStyles";

import Logo from "../../images/logo.png";
import LanguageButton from "../common/LanguageButton";
import MailBoxButton from "../common/MailBoxButton";
import UploadButton from "../common/UploadButton";
import LoginButton from "../common/LoginButton";

const Header = ({ isMainPage, getSearchInputValue }: { isMainPage: boolean; getSearchInputValue: (value: string)=>void }) => {
  const handleKeyDown = (event )=> {
    if (event.key === 'Enter') {
      getSearchInputValue(event?.target?.value)
    }
  }

  return (
    <div className={HeaderStyles.navWrapper}>
      <div className={HeaderStyles.navContainer}>
        <div className={HeaderStyles.logoWrapper}>
          <Link to="/" className={HeaderStyles.logoContainer}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        {isMainPage && (
          <div className={HeaderStyles.searchbarWrapper}>
            <div className={HeaderStyles.searchbarContainer}>
              <div className={HeaderStyles.inputWrapper}>
                <div className={HeaderStyles.searchIcon}>
                  <AiOutlineSearch />
                </div>
                <input
                  className={HeaderStyles.placeholderWrapper}
                  type="text"
                  onKeyDown={handleKeyDown}
                  placeholder="Buscar anuncios por nombre"
                />
              </div>
            </div>
          </div>
        )}
        <div className={HeaderStyles.headerItemsWrapper}>
          <div className={HeaderStyles.headerItem}>
            <LanguageButton />
          </div>
          <NavLink to="/category" className={HeaderStyles.headerItem}>
            <MailBoxButton />
          </NavLink>
          <NavLink to="/login" className={HeaderStyles.headerItem}>
            {/* <LoginButton onClickModalButton={onClickModalButton} /> */}
            <LoginButton />
          </NavLink>
          <div className={HeaderStyles.headerItem}>
            <UploadButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
