import { useTranslation } from "react-i18next";

import { IoLanguage } from "react-icons/io5";

const style = {
  languageButton:
    "text-[#8a939b] text-[28px] font-extrabold md:my-0 my-7 px-0 md:px-3 flex md:flex items-center",
  languageText:
    "flex font-extrabold text-[15px] pl-3 text-center hover:text-gray-600 duration-500 cursor-pointer",
};

function LanguageButton() {
  const { i18n } = useTranslation();

  function changeToEnglish() {
    i18n.changeLanguage("en");
  }

  function changeToSpanish() {
    i18n.changeLanguage("es");
  }

  return (
    <div className={style.languageButton}>
      <IoLanguage />
      <button className={style.languageText} onClick={changeToEnglish}>
        EN
      </button>
      <button className={style.languageText} onClick={changeToSpanish}>
        ES
      </button>
    </div>
  );
}

export default LanguageButton;
