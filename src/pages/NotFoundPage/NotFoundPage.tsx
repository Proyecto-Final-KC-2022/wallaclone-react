import { Link } from "react-router-dom";

import Layout2 from "../../components/layout/Layout2";
import ErrorImg from "../../images/error404.png";

const style = {};

const NotFoundPage = ({
  customImage,
  customTitle,
  customText,
  hideButton = false,
  insideLayout = true,
}: {
  customImage?: string;
  customTitle?: string;
  customText?: string;
  hideButton?: boolean;
  insideLayout?: boolean;
}) => {
  return (
    <>
      {insideLayout ? (
        <Layout2>
          {errorPageContent(customImage, customTitle, customText, hideButton)}
        </Layout2>
      ) : (
        errorPageContent(customImage, customTitle, customText, hideButton)
      )}
    </>
  );
};
function errorPageContent(
  customImage: string,
  customTitle: string,
  customText: string,
  hideButton: boolean
) {
  return (
    <div className="text-center p-[60px] max-w-full w-full my-0 mx-auto relative block bg-white" style={{zIndex: -9999}}>
      <img
        className="max-w-[350px] inline-block m-0 p-0"
        src={customImage || ErrorImg}
        alt="Nada por aquí"
      />
      <p className="mt-[44px] mb-[8px] text-[1.25rem]">
        {customTitle || "Nada por aquí"}
      </p>
      <p className="w-[60%] text-[#607D8B] my-[20px] mx-auto leading-5">
        {customText ||
          "Uish... Esta página no existe en Wallaclone, lo que sí que existen son miles de oportunidades esperándote."}
      </p>

      {!hideButton && (
        <Link to="/">
          <button className="text-[1rem] inline-block bg-[#13C1AC] hover:bg-[#0F9989] py-[12px] px-[20px] rounded-[100px] text-white">
            Ver productos
          </button>
        </Link>
      )}
    </div>
  );
}
export default NotFoundPage;
