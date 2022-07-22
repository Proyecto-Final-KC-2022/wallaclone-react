import { NavLink } from "react-router-dom";
import Avatar from "../../images/avatar.png";
import AccountButtonStyles from "../../styles/AccountButtonStyles";

const AccountButton = () => {
  return (
    <NavLink to="/account">
      <div className={AccountButtonStyles.accountButtonWrapper}>
        <div className={AccountButtonStyles.avatarWrapper}>
          <div className={AccountButtonStyles.avatarContainer}>
            <img className={AccountButtonStyles.avatarImg} src={Avatar} />
          </div>
        </div>

        <div className={AccountButtonStyles.redDot}></div>
        <span className={AccountButtonStyles.youText}>Tú</span>
      </div>
    </NavLink>
  );
};

export default AccountButton;
