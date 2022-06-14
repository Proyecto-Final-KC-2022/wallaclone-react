import Logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const style = {
    navWrapper: "flex h-[66px] w-full text-center items-center justify-center bg-[#fff] sticky top-0",
    navContainer: "flex h-full w-full px-[16px]",
    logoWrapper: "flex items-center justify-center",
    logoContainer: "block w-[38px] h-[38px]",
    searchbarWrapper: "flex w-full px-[16px]",
    searchbarContainer: "flex w-full items-center justify-center",
    inputWrapper: "flex w-full items-center rounded-[21px] border border-transparent bg-gray-300",
    searchIcon: "text-[#253238] text-xl mx-3 items-center",
    placeholderWrapper: "w-full h-[42px] text-[0.875rem] outline-0 ring-0 placeholder:text-[#253238] bg-gray-300 mr-4",
    headerItemsWrapper: "relative flex items-center justify-end ml-auto gap-2",
    headerItem: "flex relative h-[65px] items-center text-[#253238]",
}

const Header = () => {
  return (
    <div className={style.navWrapper}>
        <div className={style.navContainer}>
            <a className={style.logoWrapper}>
                <i className={style.logoContainer}>
                    <img src={Logo} alt="logo" />
                </i>
            </a>
            <div className={style.searchbarWrapper}>
                <div className={style.searchbarContainer}>
                    <div className={style.inputWrapper}>
                        <div className={style.searchIcon}>
                            <AiOutlineSearch />
                        </div>
                        <input 
                            className={style.placeholderWrapper}
                            type="text" 
                            placeholder="Buscar en Todas las categorías"
                        />
                    </div>
                </div>
            </div>
            <div className={style.headerItemsWrapper}>
                <div className={style.headerItem}>Buzon</div>
                <div className={style.headerItem}>Registro</div>
                <div className={style.headerItem}>Subir producto</div>
            </div>
        </div>
    </div>
  )
}

export default Header