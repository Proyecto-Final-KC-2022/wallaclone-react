import { Link, useNavigate } from "react-router-dom";

import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusCircle }from 'react-icons/ai';
import { AiOutlineMail } from "react-icons/ai";
import { BsEmojiLaughing } from "react-icons/bs";

const style = {
  navWrapper:
    "md:hidden xl:hidden flex h-[66px] w-full text-center items-center justify-center bg-[#fff] sticky bottom-0 border-t-[2px] border-gray-200",
  navContainer: "flex items-center justify-center h-full w-full px-[16px]",
  navItems: "flex-col items-center text-center justify-center w-full",
  navIcon: "flex justify-center text-[#607d8b] hover:text-[#13c1ac] text-3xl",
  navText: "text-center text-[.75rem] text-[#607d8b] mt-[4px]"
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={style.navWrapper}>
      <div className={style.navContainer}>
        <Link to="/" className={style.navItems}>
            <div className={style.navIcon}>
                <AiOutlineShop />
            </div>
            <span className={style.navText}>
                Inicio
            </span>
        </Link>
        <div className={style.navItems}>
            <div className={style.navIcon}>
                <AiOutlineHeart />
            </div>
            <span className={style.navText}>
                Favoritos
            </span>
        </div>
        <Link to="/account/upload" className={style.navItems}>
            <div className={style.navIcon}>
                <AiOutlinePlusCircle />
            </div>
            <span className={style.navText}>
                Súbelo
            </span>
        </Link>
        <div className={style.navItems}>
            <div className={style.navIcon}>
                <AiOutlineMail />
            </div>
            <span className={style.navText}>
                Buzón
            </span>
        </div>
        <Link to="/account" className={style.navItems}>
            <div className={style.navIcon}>
                <BsEmojiLaughing />
            </div>
            <span className={style.navText}>
                Tú
            </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
