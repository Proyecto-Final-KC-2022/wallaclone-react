import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FcLock } from "react-icons/fc";
import { TbSend } from "react-icons/tb";

import FakeImg from "../../../src/images/fake-item.png";
import { useState, useEffect } from "react";
import { Chat, Message } from "../../models/Chat.model";
import UserService from "../../api/service/User.service";
import Spinner from "../../components/spinner/Spinner";
// import { useSocketContext } from "../../socket-context/socketContext";
import socket from "../../socket-context/socketContext";
import { useSearchParams } from "react-router-dom";
export type UserChat = {
  chatId?: string;
  otherUserName: string; //nombre del usuario con el que tengo el chat (diferente al usuario actual)
  otherUserId: string;
  advertId: string;
  advertName: string;
  advertPrice: number;
  messages: Array<Message>;
};
const ChatPage = ({ currentUserId }) => {
  const [searchParams] = useSearchParams();
  const advertId = searchParams.get("advertid");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chatsList, setChatsList] = useState<Array<UserChat>>([]);
  const [currentChat, setCurrentChat] = useState<UserChat>(null);
  const [currentChatMessages, setCurrentChatMessages] = useState<
    Array<Message>
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState<Message>(null);

  // const socket = useSocketContext().socket.current;

  useEffect(() => {
    socket.emit("joinChatRoom", { userId: currentUserId });
    socket.on("getPrivateMessage", (data) => {
      setArrivalMessage(data);
    });
    (async () => {
      try {
        setIsLoading(true);
        const chats = await UserService.getUserChats({
          queryParams: { advertId: advertId },
        });
        const currentUserChats: Array<UserChat> = chats.map((chat) => {
          const otherUser = chat?.members?.find((member) => {
            return member._id !== currentUserId;
          });
          return {
            chatId: chat._id,
            otherUserId: otherUser?._id,
            otherUserName: otherUser?.name,
            advertId: chat?.advertId?._id,
            advertName: chat?.advertId?.name,
            advertPrice: chat?.advertId?.price,
            messages: chat?.messages,
          };
        });
        setChatsList(currentUserChats);
      } catch (err) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      if (currentChat) {
        setCurrentChatMessages(currentChat.messages);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageData = {
      chatId: currentChat.chatId,
      advertId: currentChat.advertId,
      message: {
        content: newMessage,
        sender: currentUserId,
        receiver: currentChat.otherUserId,
        creationDate: new Date().toISOString(),
        read: false,
      } as Message,
    };
    socket.emit("sendMessage", messageData);
    setCurrentChatMessages((prev) => [...prev, messageData.message]);
  };

  useEffect(() => {
    arrivalMessage &&
      setCurrentChatMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
  return (
    <div className="max-w-full flex-1 block bg-white">
      {!isLoading && !error && (
        <div className="relative min-h-full flex">
          <div className="absolute z-1 left-[16px] top-[16px] block">
            <nav className="block">
              <ul className="list-none p-0 m-0 flex ">
                <li className="ml-0 relative text-center">
                  <div className="text-white bg-[#253238] py-[6px] px-[12px] rounded-[40px] text-[.875rem] font-bold block text-center">
                    Mensajes
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="h-[calc(100vh - 66px)] flex items-center">
            <div className="relative bg-transparent w-[340px] border border-[#CFD8DC] pt-[44px] h-full block">
              <div className="block border-b border-[#CFD8DC]">
                <div className="h-[66px]">
                  <div className="flex items-center my-auto text-[.875rem] py-[1rem] px-[1.5rem] text-[#6c757d] whitespace-nowrap">
                    <div className="flex text-[16px] text-[#253238] font-bold whitespace-nowrap">
                      Bandeja de Entrada
                    </div>
                  </div>
                </div>
              </div>

              {/* LISTADO DE CHATS */}

              {chatsList?.length > 0 &&
                chatsList.map((chat, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => setCurrentChat(chat)}
                      className="scroll-smooth block overflow-y-scroll max-h-[750px] overflow-x-hidden"
                    >
                      <div className="w-full py-5 px-4 items-center hover:bg-gray-200 cursor-pointer border-b border-[#CFD8DC]">
                        <div className="flex">
                          <div className="flex overflow-hidden relative cursor-pointer">
                            <div className="grow overflow-hidden flex py-[20px] float-left rounded-[10px] w-[60px] h-[60px] bg-cover mr-[12px] relative items-center">
                              <img
                                className="float-left rounded-[10px] w-[60px] h-[60px] flex relative mr-[12px]"
                                src={FakeImg}
                              />
                            </div>
                          </div>
                          <div className="grow overflow-hidden flex flex-col justify-between">
                            <div className="text-[#90a4ae] overflow-hidden flex flex-row grow cursor-pointer">
                              <div className="overflow-hidden text-ellipsis whitespace-nowrap grow flex">
                                <p className="text-[.75rem] flex overflow-hidden text-ellipsis whitespace-nowrap">
                                  {chat.otherUserName}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-row grow">
                              <div className="flex flex-col">
                                <div className="flex flex-row leading-4 font-bold overflow-hidden text-[1rem] grow whitespace-nowrap">
                                  <span>{chat.advertName}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* FIN DEL LISTADO DE CHATS */}
            </div>
          </div>

          {/* CONTENEDOR CHAT */}
          <div className="bg-white flex-1 relative block">
            <div className="h-full">
              <div className="h-full flex">
                <div className="grow h-full float-left block">
                  <div className="w-full h-full flex flex-col">
                    <div className="w-full px-[20px] pt-[12px] pb-[6px]  top-0">
                      <div className="absolute flex items-center justify-center h-[50px] ">
                        <BsArrowLeft className="h-[50px] w-[22px]" />
                      </div>

                      {currentChat && (
                        <>
                          <div className="inline-flex bg-transparent w-full pt-[60px] border-b border-[#CFD8DC]">
                            <div className="block">
                              <div className="min-w-[160px] inline-block">
                                <div className="w-[150px] h-[150px] bg-cover mr-[12px] flex relative">
                                  <img
                                    className="rounded-[4px]"
                                    src={FakeImg}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="w-full py-[5px] h-[20px] float-right block text-left">
                              <div className="font-bold block">
                                {currentChat.advertPrice}€
                              </div>
                              <div className="overflow-hidden text-ellipsis whitespace-nowrap block">
                                {currentChat.advertName}
                              </div>
                              <div className="mt-[8px] mb-[4px] mx-0 bg-[#eceff1] h-[1px]"></div>
                              <div className="flex flex-row w-full">
                                <div className="w-full text-left py-[12px] px-0 overflow-hidden text-ellipsis whitespace-nowrap block text-[#253238]">
                                  <h5 className="mb-[4px] mt-[-8px] text-[1rem] overflow-hidden text-ellipsis whitespace-nowrap block">
                                    {currentChat.otherUserName}
                                  </h5>
                                </div>
                                <div className="relative block">
                                  <div className="bg-cover w-[40px] h-[40px] block">
                                    <img
                                      className="rounded-[50%]"
                                      src={FakeImg}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="overflow-y-scroll pt-[12px]">
                            {currentChatMessages?.length > 0 &&
                              currentChatMessages.map((message, idx) => {
                                return (
                                  <div
                                    key={idx}
                                    className="pb-[12px] px-[20px] max-h-[500px] w-full flex grow"
                                  >
                                    <div className="grow block">
                                      <div
                                        style={
                                          message.sender === currentUserId
                                            ? messageOwnClass
                                            : messageClass
                                        }
                                        // className={own ? "message own" : "message"}
                                      >
                                        <div style={{ display: "flex" }}>
                                          <p
                                            style={
                                              message.sender === currentUserId
                                                ? messageTextOwn
                                                : messageText
                                            }
                                          >
                                            {message.content}
                                          </p>
                                        </div>
                                        <div
                                          style={{
                                            fontSize: "12px",
                                            marginTop: "10px",
                                          }}
                                        >
                                          {message.creationDate}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="flex flex-col-reverse mt-auto w-full">
                            <div className="text-center my-0 mx-auto block">
                              <div className="bg-[#c6edf6] text-[#3daabf] py-[8px] px-[20px] inline-flex text-center rounded-[20px] my-[12px]">
                                <span className="mr-[4px] text-[.875rem] text-center flex items-center">
                                  <FcLock />
                                </span>
                                <span className="text-[.875rem] font-semibold">
                                  Por razones de seguridad, nunca compartas
                                  datos privados
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-[8px] mb-[4px] mx-0 bg-[#eceff1] h-[1px]"></div>

                          <div className="relative py-[12px] px-[20px] items-center justify-center w-full">
                            <form className="flex flex-full items-center">
                              <div className="w-full rounded-[24px] border border-[#ECEFF1] py-[4px] pr-[4px] pl-[20px] flex items-center">
                                <div className="inline-block items-center w-full">
                                  <textarea
                                    className="overflow-hidden h-[28px] inline-block bg-transparent p-[2px] w-full outline-none"
                                    placeholder="Escribe un mensaje..."
                                    onChange={(evt) =>
                                      setNewMessage(evt?.target?.value)
                                    }
                                    value={newMessage}
                                  ></textarea>
                                </div>

                                <button
                                  className="inline-block cursor-pointer"
                                  onClick={handleSubmit}
                                >
                                  <div className="right-[5px] bottom-[6px] flex items-center justify-center">
                                    <div className="rounded-[50%] w-[40px] h-[40px] bg-[#CFD8DC] flex items-center justify-center mx-2">
                                      <TbSend className="rounded-[50%] w-[22px] h-[22px] text-white" />
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </form>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FIN DEL CONTENEDOR CHAT */}
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center bg-gray-200 py-4 h-full">
          <Spinner />
        </div>
      )}

      {error && !isLoading && (
        // <Toast bg="danger" onClose={() => dispatch(uiResetError())}>
        //   <Toast.Header>
        <strong className="me-auto">Error</strong>
        //   </Toast.Header>
        //   <Toast.Body>Se ha producido un error en la aplicación.</Toast.Body>
        // </Toast>
      )}
    </div>
  );
};

const messageClass: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  alignItems: "flex-end",
};
const messageOwnClass: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
};

const messageText: React.CSSProperties = {
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "#0F9989",
  color: "white",
  maxWidth: "300px",
};

const messageTextOwn: React.CSSProperties = {
  padding: "10px",
  borderRadius: "20px",
  maxWidth: "300px",
  backgroundColor: "#5F7DA3",
  color: "white",
};
export default ChatPage;
