import { NavLink } from "react-router-dom";
import Inbox from "../../images/inbox.png";

const style = {
  mailButtonWrapper:
    "flex w-[80px] h-[65px] items-center justify-center text-center hover:border-b-[3px] border-black",
  mailButtonText: "flex text-center items-center text-[.875rem] pr-2",
};

const MailBoxButton = () => {
  return (
    <NavLink to="/account/chat">
      <div className="h-[65px] relative flex items-center whitespace-nowrap cursor-pointer hover:border-b-[3px] border-black">
        <div className={style.mailButtonWrapper}>
          <div className="justify-center items-center mr-1">
            <img src={Inbox} alt="inbox" />
          </div>
          <div className="left-[20px] top-[17px] h-[8px] w-[8px] rounded-[8px] bg-[#fd6c67] absolute block"></div>
          <span className={style.mailButtonText}>Buzón</span>
        </div>
      </div>
    </NavLink>
  );
};

export default MailBoxButton;
