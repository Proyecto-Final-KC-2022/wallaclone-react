import React from "react";

import { GrClose } from "react-icons/gr";

import ModalStyles from "./ModalStyles";

const Modal = ({ children, open, onClose }: any) => {
  if (!open) return null;
  return (
    <div className={ModalStyles.modalWrapper}>
      <div className="bg-white p-8 rounded-xl w-[500px] h-[500px] items-center">
        <div
          className="flex m-0 justify-end cursor-pointer text-2xl"
          onClick={onClose}
        >
          <GrClose />
        </div>
        <>
            {children}
        </>
      </div>
    </div>
  );
};

export default Modal;
