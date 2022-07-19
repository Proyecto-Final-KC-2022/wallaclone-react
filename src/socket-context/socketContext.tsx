// import React from "react";
// import io, { Socket } from "socket.io-client";
// import { useRef } from 'react';

// export type SocketContextType = {
//   socket:  any;
// };

// const SocketContext = React.createContext<SocketContextType>({} as any);

// export const useSocketContext = () => {
//   const socketValue = React.useContext(SocketContext);
//   return socketValue;
// };

// export const SocketProvider = ({ children }) => {
//   const store: SocketContextType = {
//     socket: useRef(io(import.meta.env.VITE_SOCKET_IP,  { transports: ["websocket"] })),
//   };
//   console.log("CONECTANDO AL SOCKET");

//   return (
//     <SocketContext.Provider value={store}> {children}</SocketContext.Provider>
//   );
// };
import io from "socket.io-client";
export default io(import.meta.env.VITE_SOCKET_IP, {
  transports: ["websocket"],
});
