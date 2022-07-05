import React from "react";

import ModalStyles from "./ModalStyles";

const Modal = ({ children }) => {

  return (
    <div className={ModalStyles.modalWrapper}>
      <div className="bg-white p-8 rounded-xl w-[500px] h-[500px] items-center">
        <>
          {children}
        </>
      </div>
    </div>
  );
};

export default Modal;
