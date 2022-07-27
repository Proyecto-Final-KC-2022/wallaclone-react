import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserService from "../../api/service/User.service";
import Inbox from "../../images/inbox.png";
import storage from "../../utils/storage";
import { parseJwt } from "../../utils/utils";
import { useAuthContext } from "../auth/context";
import socket from "../../socket-context/socketContext";

import MailBoxButtonStyles from "../../styles/MailBoxButtonStyles";

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
    <NavLink to='/account/chat'>
      <button className={MailBoxButtonStyles.mailButtonWrapper}>
        <div className={MailBoxButtonStyles.mailButtonContainer}>
          <div className={MailBoxButtonStyles.mailIconContainer}>
            <img src={Inbox} alt='inbox' />
          </div>
          {hasUnreadMessages && (
            <div className={MailBoxButtonStyles.redDot}></div>
          )}
          <span className={MailBoxButtonStyles.mailButtonText}>Buzón</span>
        </div>
      </button>
    </NavLink>
  );
};

export default MailBoxButton;
