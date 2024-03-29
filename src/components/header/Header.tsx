import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import Logo from "../../images/logo.png";
import LanguageButton from "../common/LanguageButton";
import MailBoxButton from "../common/MailBoxButton";
import UploadButton from "../common/UploadButton";
import ConnectedAuthButton from "../auth/AuthButton/AuthButton";
import HeaderStyles from "../../styles/HeaderStyles";

const Header = ({
  isMainPage,
  getSearchInputValue,
}: {
  isMainPage: boolean;
  getSearchInputValue: (value: string) => void;
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getSearchInputValue(event?.target?.value);
    }
  };

  return (
    <div className={HeaderStyles.navWrapper}>
      <div className={HeaderStyles.navContainer}>
        <div className={HeaderStyles.logoWrapper}>
          <Link
            to="/"
            onClick={() => window.location.reload()}
            className={HeaderStyles.logoContainer}
          >
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
          <div className={HeaderStyles.headerItem}>
            <MailBoxButton />
          </div>
          <div className={HeaderStyles.headerItem}>
            <ConnectedAuthButton />
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
