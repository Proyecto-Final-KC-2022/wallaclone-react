import React from 'react'

import FakeImg from "../../../src/images/fake-item.png"

const ChatPage = () => {
  return (
    <div className="max-w-full flex-1 block bg-white">
        <div className="relative min-h-full block">

            <div className="absolute z-1 left-[16px] top-[16px] block">
                <nav className="block">
                    <ul className="list-none p-0 m-0 flex ">
                        <li className="ml-0 relative text-center">
                            <div className="text-white bg-[#253238] py-[6px] px-[12px] rounded-[40px] text-[.875rem] font-bold block text-center">Mensajes</div>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="h-[calc(100vh - 66px)] flex items-center">
                <div className="relative bg-transparent w-[340px] border-r border-b border-[#CFD8DC] pt-[44px] h-full block">

                    <div className="block">
                        <div className="h-[66px] border-b border-[#CFD8DC]">
                            <div className="flex items-center my-auto text-[.875rem] py-[1rem] px-[1.5rem] text-[#6c757d] whitespace-nowrap">
                                <div className="flex text-[16px] text-[#253238] font-bold whitespace-nowrap">Bandeja de Entrada</div>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-smooth block overflow-y-auto overflow-x-hidden w-full py-5 px-4 items-center hover:bg-gray-200 cursor-pointer">
                        <div className="flex">
                            <div className="flex overflow-hidden relative cursor-pointer">
                                <div className="grow overflow-hidden flex py-[20px] float-left rounded-[10px] w-[60px] h-[60px] bg-cover mr-[12px] relative items-center">
                                    <img className="float-left rounded-[10px] w-[60px] h-[60px] flex relative mr-[12px]" src={FakeImg} />       
                                </div>
                            </div>
                            <div className="grow overflow-hidden flex flex-col justify-between">
                                <div className="text-[#90a4ae] overflow-hidden flex flex-row grow cursor-pointer">
                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap grow flex">
                                        <p className="text-[.75rem] flex overflow-hidden text-ellipsis whitespace-nowrap">Nombre del usuario</p>
                                    </div>
                                </div>

                                <div className="flex flex-row grow">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row leading-4 font-bold overflow-hidden text-[1rem] grow whitespace-nowrap">
                                            <span>Nombre del producto</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-[#90a4ae] relative block">
                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap grow flex">
                                        <span className="text-[.75rem] overflow-hidden text-ellipsis whitespace-nowrap ">Conversación</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatPage