import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserService from "../../api/service/User.service";
import Inbox from "../../images/inbox.png";
import storage from "../../utils/storage";
import { parseJwt } from "../../utils/utils";
import { useAuthContext } from "../auth/context";
import socket from "../../socket-context/socketContext";

const style = {
  mailButtonWrapper:
    "flex w-[80px] h-[65px] items-center justify-center text-center hover:border-b-[3px] border-black",
  mailButtonText: "flex text-center items-center text-[.875rem] pr-2",
};

const MailBoxButton = () => {
  const { isLogged } = useAuthContext();
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const auth = storage.get("auth") || storage.getSession("auth");
  const jwtToken = auth?.replace('"', "");
  const currentUserId = parseJwt<{ _id?: string }>(jwtToken)?._id;

  const socketListeners = () => {
    socket.on("messageUnread", () => {
      setHasUnreadMessages(true);
    });

    socket.on("setMessagesAsRead", () => {
      setHasUnreadMessages(false);
    });
    // socket.on("getPrivateMessage", (data) => {
    //   setHasUnreadMessages(true);
    // });
  };

  useEffect(() => {
    socket.emit("joinChatRoom", { userId: currentUserId });
    if (isLogged) {
      (async () => {
        const chats = await UserService.getUserChats();
        const allMessagesRead = chats
          ?.reduce((acc, current) => {
            acc.push(current.messages);
            return acc;
          }, [])
          ?.flat()
          ?.filter((e) => e.receiver === currentUserId)
          ?.every((e) => e.read);

        setHasUnreadMessages(!allMessagesRead);
      })();
    }
    socketListeners();
  }, []);
  return (
    <NavLink to="/account/chat">
      <div className="h-[65px] relative flex items-center whitespace-nowrap cursor-pointer hover:border-b-[3px] border-black">
        <div className={style.mailButtonWrapper}>
          <div className="justify-center items-center mr-1">
            <img src={Inbox} alt="inbox" />
          </div>

          {hasUnreadMessages && (
            <div className="left-[20px] top-[17px] h-[8px] w-[8px] rounded-[8px] bg-[#fd6c67] absolute block"></div>
          )}

          <span className={style.mailButtonText}>Buzón</span>
        </div>
      </div>
    </NavLink>
  );
};

export default MailBoxButton;
