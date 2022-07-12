import { NavLink } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

const style = {
  uploadButtonWrapper:
    "flex w-full min-w-[150px] items-center justify-center text-center bg-[#13c1ac] hover:bg-[#0f9989] text-white rounded-[21px] border border-[#13c1ac] h-[42px]",
  uploadText:
    "flex text-center items-center text-[.875rem] text-white font-semibold",
};

const UploadButton = () => {
  return (
    <NavLink to="/upload">
      <button className={style.uploadButtonWrapper}>
        <div className="flex items-center text-white">
          <div className="text-2xl mr-1 items-center">
            <AiOutlinePlusCircle />
          </div>
          <span className={style.uploadText}>Subir producto</span>
        </div>
      </button>
    </NavLink>
  );
};

export default UploadButton;
