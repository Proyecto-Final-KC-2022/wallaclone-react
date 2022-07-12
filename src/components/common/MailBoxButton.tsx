import { NavLink } from "react-router-dom";
import Inbox from "../../images/inbox.png";

const style = {
  mailButtonWrapper:
    "flex w-[80px] h-[65px] items-center justify-center text-center hover:border-b-[3px] border-black",
  mailButtonText: "flex text-center items-center text-[.875rem] pr-2",
};

const MailBoxButton = () => {
  return (
    <NavLink to="/category">
      <div className={style.mailButtonWrapper}>
        <div className="justify-center items-center mr-1">
          <img src={Inbox} alt="inbox" />
        </div>
        <span className={style.mailButtonText}>Buzón</span>
      </div>
    </NavLink>
  );
};

export default MailBoxButton;
