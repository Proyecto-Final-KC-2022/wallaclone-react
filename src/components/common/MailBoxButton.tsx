import { NavLink } from "react-router-dom";
import Inbox from "../../images/inbox.png";
import MailBoxButtonStyles from "../../styles/MailBoxButtonStyles";

const MailBoxButton = () => {
  return (
    <NavLink to="/account/chat">
      <button className={MailBoxButtonStyles.mailButtonWrapper}>
        <div className={MailBoxButtonStyles.mailButtonContainer}>
          <div className={MailBoxButtonStyles.mailIconContainer}>
            <img src={Inbox} alt="inbox" />
          </div>
          <div className={MailBoxButtonStyles.redDot}></div>
          <span className={MailBoxButtonStyles.mailButtonText}>Buzón</span>
        </div>
      </button>
    </NavLink>
  );
};

export default MailBoxButton;
