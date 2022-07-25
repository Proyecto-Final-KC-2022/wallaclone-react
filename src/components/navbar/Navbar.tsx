import { Link } from "react-router-dom";

import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusCircle }from 'react-icons/ai';
import { AiOutlineMail } from "react-icons/ai";
import { BsEmojiLaughing } from "react-icons/bs";
import NavbarStyles from "../../styles/NavbarStyles";

const Navbar = () => {
  return (
    <div className={NavbarStyles.navWrapper}>
      <div className={NavbarStyles.navContainer}>
        <Link to="/" className={NavbarStyles.navItems}>
            <div className={NavbarStyles.navIcon}>
                <AiOutlineShop />
            </div>
            <span className={NavbarStyles.navText}>
                Inicio
            </span>
        </Link>
        <div className={NavbarStyles.navItems}>
            <div className={NavbarStyles.navIcon}>
                <AiOutlineHeart />
            </div>
            <span className={NavbarStyles.navText}>
                Favoritos
            </span>
        </div>
        <Link to="/account/upload" className={NavbarStyles.navItems}>
            <div className={NavbarStyles.navIcon}>
                <AiOutlinePlusCircle />
            </div>
            <span className={NavbarStyles.navText}>
                Súbelo
            </span>
        </Link>
        <Link to="/account/chat" className={NavbarStyles.navItems}>
            <div className={NavbarStyles.navIcon}>
                <AiOutlineMail />
            </div>
            <span className={NavbarStyles.navText}>
                Buzón
            </span>
        </Link>
        <Link to="/account" className={NavbarStyles.navItems}>
            <div className={NavbarStyles.navIcon}>
                <BsEmojiLaughing />
            </div>
            <span className={NavbarStyles.navText}>
                Tú
            </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
