import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import Header2Styles from "./Header2Styles";

import Logo from "../../images/logo.png";
import LanguageButton from "../common/LanguageButton";
import MailBoxButton from "../common/MailBoxButton";
import UploadButton from "../common/UploadButton";
import LoginButton from "../common/LoginButton";

const Header2 = () => {
  return (
    <div className={Header2Styles.navWrapper}>
      <div className={Header2Styles.navContainer}>
        <div className={Header2Styles.logoWrapper}>
          <Link to="/" className={Header2Styles.logoContainer}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className={Header2Styles.headerItemsWrapper}>
          <div className={Header2Styles.headerItem}>
            <LanguageButton />
          </div>
          <NavLink to="/category" className={Header2Styles.headerItem}>
            <MailBoxButton />
          </NavLink>
          <NavLink to="/login" className={Header2Styles.headerItem}>
            <LoginButton  />
          </NavLink>
          <div className={Header2Styles.headerItem}>
            <UploadButton />
          </div>
        </div>
    </div>
  );
};

export default Header2;
