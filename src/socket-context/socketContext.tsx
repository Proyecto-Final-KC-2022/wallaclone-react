import React from "react";
import io, { Socket } from "socket.io-client";

export type SocketContextType = {
  socket:  Socket;
};

const SocketContext = React.createContext<SocketContextType>({} as any);

export const useSocketContext = () => {
  const socketValue = React.useContext(SocketContext);
  return socketValue;
};

export const SocketProvider = ({ children }) => {
  const store: SocketContextType = {
    socket: io(import.meta.env.VITE_SOCKET_IP),
  };
  console.log("CONECTANDO AL SOCKET");
  
  return (
    <SocketContext.Provider value={store}> {children}</SocketContext.Provider>
  );
};
