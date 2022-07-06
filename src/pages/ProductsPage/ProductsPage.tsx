import CircularProgress from "@mui/material/CircularProgress";

import Layout from "../../components/layout/Layout";
import ProductCard2 from "../../components/product/ProductCard2";
import useQuery from "../../hooks/useQuery";
import AdvertisementsSrv from "../../api/service/Advertisement.service";
import { Advert } from "../../models/Advert.model";
import { LoadMoreButton } from "../../components/common/LoadMoreButton";
import Spinner from "../../components/spinner/Spinner";

/**
  TODO: 
  ● Se deben mostrar los últimos anuncios publicados por orden cronológico, siendo el primero
    el más reciente y el último el más antiguo
  ● No se deben mostrar todos los anuncios publicados en la página inicial, se debe poner un
    límite al número de anuncios mostrados
  ● La UI deberá ser consistente a otros listados de anuncios
  ● Cada anuncio deberá mostrar: nombre, imagen, descripción, si se vende o se busca, el precio
    y el miembro de la plataforma autor del anuncio.
 */
const ProductsPage = (): JSX.Element => {
  //TODO: Usar un componente de carga (spinner) mientras cargan los anuncios
  //TODO: Usar un compoennte de error si ha habido algún error
  const {
    isLoading,
    error,
    data: adverts = [],
  } = useQuery(AdvertisementsSrv.getAllAdvertisements);

  return (
    <>
      <Layout>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 xl:px-[200px] px-[15px] py-[15px] min-h-[100vh] bg-gray-200">
          {adverts.length > 0 ? (
            adverts.map((advert: Advert) => (
              <ProductCard2 {...advert} key={advert._id} />
            ))
          ) : (
            <p> UNDER CONSTRUCTION: EMPTY LIST SHOULD BE HERE!!!</p>
          )}
        </div>
        
        <div className="flex py-[1.5rem] justify-center text-[16px] font-semibold bg-gray-200">
          <LoadMoreButton />
        </div>

        <div className="flex justify-center bg-gray-200 py-4 h-full">
          <CircularProgress />
        </div>

        <div className="flex justify-center bg-gray-200 py-4 h-full">
          <Spinner />
        </div>

      </Layout>
    </>
  );
};

export default ProductsPage;
