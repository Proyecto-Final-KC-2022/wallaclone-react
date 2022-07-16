import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FcLock } from 'react-icons/fc'
import { TbSend } from 'react-icons/tb'

import FakeImg from "../../../src/images/fake-item.png"

const ChatPage = () => {
  return (
    <div className="max-w-full flex-1 block bg-white">
        <div className="relative min-h-full flex">

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
                <div className="relative bg-transparent w-[340px] border border-[#CFD8DC] pt-[44px] h-full block">

                    <div className="block border-b border-[#CFD8DC]">
                        <div className="h-[66px]">
                            <div className="flex items-center my-auto text-[.875rem] py-[1rem] px-[1.5rem] text-[#6c757d] whitespace-nowrap">
                                <div className="flex text-[16px] text-[#253238] font-bold whitespace-nowrap">Bandeja de Entrada</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="scroll-smooth block overflow-y-scroll max-h-[750px] overflow-x-hidden">
                        <div className="w-full py-5 px-4 items-center hover:bg-gray-200 cursor-pointer border-b border-[#CFD8DC]">
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

            <div className="bg-white flex-1 relative block">
                <div className="h-full">
                    <div className="h-full flex">
                        <div className="grow h-full float-left block">
                            <div className="w-full h-full flex flex-col">
                                <div className="w-full px-[20px] pt-[12px] pb-[6px]  top-0">
                                    <div className="absolute flex items-center justify-center h-[50px] ">
                                        <BsArrowLeft className="h-[50px] w-[22px]" />
                                    </div>

                                    <div className="inline-flex bg-transparent w-full pt-[60px] border-b border-[#CFD8DC]">

                                        <div className="block">
                                            <div className="min-w-[160px] inline-block">
                                                <div className="w-[150px] h-[150px] bg-cover mr-[12px] flex relative">
                                                    <img className='rounded-[4px]' src={FakeImg} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full py-[5px] h-[20px] float-right block text-left">
                                            <div className="font-bold block">Precio</div>
                                            <div className="overflow-hidden text-ellipsis whitespace-nowrap block">Nombre del producto</div>
                                            <div className="mt-[8px] mb-[4px] mx-0 bg-[#eceff1] h-[1px]"></div>
                                            <div className="flex flex-row w-full">
                                                <div className="w-full text-left py-[12px] px-0 overflow-hidden text-ellipsis whitespace-nowrap block text-[#253238]">
                                                    <h5 className="mb-[4px] mt-[-8px] text-[1rem] overflow-hidden text-ellipsis whitespace-nowrap block">Nombre del usuario</h5>
                                                </div>
                                                <div className="relative block">
                                                    <div className="bg-cover w-[40px] h-[40px] block">
                                                        <img className='rounded-[50%]' src={FakeImg} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overflow-y-scroll pt-[12px] pb-[12px] px-[20px] max-h-[500px] w-full flex grow">
                                        <div className="grow block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur exercitationem obcaecati molestias, dicta officia pariatur atque et quidem! Aliquam velit maxime eaque odio molestiae culpa ipsum, incidunt placeat at porro nihil magnam rerum? Labore, nesciunt exercitationem voluptatibus tenetur harum quam voluptas vitae dolore ea eveniet, eaque pariatur quasi sint enim iure quo ut sit animi repudiandae incidunt dolorem delectus maiores laborum velit! Deleniti harum explicabo, beatae rerum exercitationem natus soluta porro aliquam dolor quod saepe atque expedita incidunt? Labore accusamus recusandae doloremque itaque tenetur provident, exercitationem repellendus. Nam, corporis ex. Aliquam vitae porro vel tempore dolore quia atque, veniam dolor autem, incidunt sunt corrupti dicta excepturi laborum delectus. Doloribus, perferendis unde accusantium mollitia assumenda architecto deleniti quis? Soluta maiores temporibus odit voluptatibus harum quo explicabo in officiis illum, veniam quasi corrupti necessitatibus fugit vel natus quos hic, at dignissimos dolorum ad, assumenda voluptas quidem consectetur! Voluptates animi porro iste asperiores, at recusandae aperiam atque. Tempora maiores magnam, et, quam ex quidem doloribus aliquam accusamus quae veniam perspiciatis ducimus, laborum non maxime repudiandae delectus? Architecto enim aut id neque sapiente et quam accusamus eveniet nam. Corporis mollitia dolores nulla tempora fugiat excepturi natus delectus laborum, consequatur voluptates! Officia modi voluptatem molestiae dolorum velit consectetur quos, laborum ad corporis vero! Dolores labore ipsam maxime illo repellendus odio repellat amet quas cupiditate ratione atque sequi accusamus recusandae commodi, saepe at distinctio. Quisquam consequatur, libero, veritatis quia neque dicta ea minus quam magni temporibus reprehenderit eum, architecto vel totam nostrum debitis? Labore cum reprehenderit quis dolor! Vel laborum praesentium suscipit modi vitae voluptate eius velit? Quos illum, dolor doloremque obcaecati repudiandae dolore consequatur cumque eaque aspernatur porro dicta est quae voluptatibus. Repudiandae eveniet id voluptate placeat animi saepe aperiam, at voluptatum reprehenderit. A debitis natus amet, culpa quos adipisci doloremque animi velit. Sit!
                                        </div>  
                                    </div>

                                    <div className="flex flex-col-reverse mt-auto w-full">
                                        <div className="text-center my-0 mx-auto block">
                                            <div className="bg-[#c6edf6] text-[#3daabf] py-[8px] px-[20px] inline-flex text-center rounded-[20px] my-[12px]">
                                                <span className="mr-[4px] text-[.875rem] text-center flex items-center">
                                                    <FcLock />
                                                </span>
                                                <span className="text-[.875rem] font-semibold">Por razones de seguridad, nunca compartas datos privados</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[8px] mb-[4px] mx-0 bg-[#eceff1] h-[1px]"></div>

                                    <div className="relative py-[12px] px-[20px] items-center justify-center w-full">
                                        <form className="flex flex-full items-center">
                                            <div className="w-full rounded-[24px] border border-[#ECEFF1] py-[4px] pr-[4px] pl-[20px] flex items-center">

                                                <div className="inline-block items-center w-full">
                                                    <textarea className="overflow-hidden h-[28px] inline-block bg-transparent p-[2px] w-full outline-none" placeholder="Escribe un mensaje..."></textarea>
                                                </div>

                                                <button className="inline-block cursor-pointer">
                                                    <div className="right-[5px] bottom-[6px] flex items-center justify-center">
                                                        <div className="rounded-[50%] w-[40px] h-[40px] bg-[#CFD8DC] flex items-center justify-center mx-2">
                                                            <TbSend className="rounded-[50%] w-[22px] h-[22px] text-white" />
                                                        </div>
                                                    </div>
                                                </button>
                                                
                                            </div>
                                        </form>
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