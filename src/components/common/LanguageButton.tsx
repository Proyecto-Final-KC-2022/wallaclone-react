import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

import LanguageButtonStyles from "../../styles/LanguageButtonStyles";

function LanguageButton() {
  const { i18n } = useTranslation();

  function changeToEnglish() {
    i18n.changeLanguage("en");
  }

  function changeToSpanish() {
    i18n.changeLanguage("es");
  }

  return (
    <div className={LanguageButtonStyles.languageButton}>
      <IoLanguage />
      <button
        className={LanguageButtonStyles.languageText}
        onClick={changeToEnglish}
      >
        EN
      </button>
      <button
        className={LanguageButtonStyles.languageText}
        onClick={changeToSpanish}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageButton;
