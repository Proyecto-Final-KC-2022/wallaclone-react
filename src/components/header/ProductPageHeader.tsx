import { Link } from "react-router-dom";

import Header2Styles from "../../styles/Header2Styles";

import Logo from "../../images/logo.png";
import LanguageButton from "../common/LanguageButton";
import MailBoxButton from "../common/MailBoxButton";
import UploadButton from "../common/UploadButton";
import ConnectedAuthButton from "../auth/AuthButton/AuthButton";

const ProductPageHeader = () => {
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
        <div className={Header2Styles.headerItem}>
          <MailBoxButton />
        </div>
        <div className={Header2Styles.headerItem}>
          <ConnectedAuthButton />
        </div>
        <div className={Header2Styles.headerItem}>
          <UploadButton />
        </div>
      </div>
    </div>
  );
};

export default ProductPageHeader;
