import { NavLink } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

import UploadButtonStyles from "../../styles/UploadButtonStyles";

const UploadButton = () => {
  return (
    <NavLink to='/account/upload'>
      <button className={UploadButtonStyles.uploadButtonWrapper}>
        <div className={UploadButtonStyles.uploadButtonContainer}>
          <div className={UploadButtonStyles.uploadIconContainer}>
            <AiOutlinePlusCircle />
          </div>
          <span className={UploadButtonStyles.uploadText}>Subir producto</span>
        </div>
      </button>
    </NavLink>
  );
};

export default UploadButton;
