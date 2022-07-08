import CircularProgress from "@mui/material/CircularProgress";

import Layout from "../../components/layout/Layout";
import ProductCard2 from "../../components/product/ProductCard2";
import AdvertisementsSrv, {
  Payload,
} from "../../api/service/Advertisement.service";
import { Advert } from "../../models/Advert.model";
import { GetAllAdvertisementsQueryParams } from "../../api/service/Advertisement.service";
import { useCallback, useRef, useState } from "react";
import usePagination from "../../hooks/usePagination";
import { LoadMoreButton } from "../../components/common/LoadMoreButton";
import Spinner from "../../components/spinner/Spinner";
import FilterBar from "../../components/filter/FilterBar";

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
  //TODO: Usar un compoennte de error si ha habido algún
  const limitPerPage: number = 8;
  const [pageNumber, setPageNumber] = useState(1);
  const startQueryParam = pageNumber > 1 ? (pageNumber - 1) * limitPerPage : 0;
  let advertisementsPayload: Payload<GetAllAdvertisementsQueryParams> = {
    queryParams: {
      start: startQueryParam,
      limit: limitPerPage,
    },
  };
  const {
    isLoading,
    error,
    data: adverts = [],
    hasMore,
  } = usePagination(
    AdvertisementsSrv.getAllAdvertisements,
    advertisementsPayload,
    pageNumber
  );
  const observer = useRef<any>();
  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const lastAdvertElementRef = useCallback(
    (node) => {
      if (isLoading) {
        return;
      }
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          goToNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const filteredAdverts = [...(adverts as Array<Advert>)]; //sortProducts(adverts);

  return (
    <>
      <Layout>
        <FilterBar />
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 px-[15px] py-[15px] min-h-[100vh] bg-gray-200">
          {!isLoading && !error && (
            <>
              {filteredAdverts.length > 0 ? (
                filteredAdverts.map((advert: Advert, index) => {
                  if (filteredAdverts.length === index + 1 && pageNumber > 1) {
                    return (
                      <div ref={lastAdvertElementRef} key={advert._id}>
                        <ProductCard2 {...advert} />
                      </div>
                    );
                  } else {
                    return (
                      <div key={advert._id}>
                        <ProductCard2 {...advert} />
                      </div>
                    );
                  }
                })
              ) : (
                <p> UNDER CONSTRUCTION: EMPTY LIST SHOULD BE HERE!!!</p>
              )}
            </>
          )}

          {!isLoading && !error && (
            <>
              {filteredAdverts.length > 0 ? (
                hasMore &&
                pageNumber === 1 && (
                  <div className="flex py-[1.5rem] justify-center text-[16px] font-semibold bg-gray-200">
                    <LoadMoreButton onClickFn={goToNextPage}/>
                  </div>
                  // <button onClick={goToNextPage}>Cargar más</button>
                )
              ) : (
                <p> UNDER CONSTRUCTION: EMPTY LIST SHOULD BE HERE!!!</p>
              )}
            </>
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
      </Layout>
    </>
  );

  //   <Layout>
  //   <FilterBar />
  //   <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 xl:px-[200px] px-[15px] py-[15px] min-h-[100vh] bg-gray-200">
  //     {adverts.length > 0 ? (
  //       adverts.map((advert: Advert) => (
  //         <ProductCard2 {...advert} key={advert._id} />
  //       ))
  //     ) : (
  //       <p> UNDER CONSTRUCTION: EMPTY LIST SHOULD BE HERE!!!</p>
  //     )}
  //   </div>

  //   <div className="flex py-[1.5rem] justify-center text-[16px] font-semibold bg-gray-200">
  //     <LoadMoreButton />
  //   </div>

  //   <div className="flex justify-center bg-gray-200 py-4 h-full">
  //     <CircularProgress />
  //   </div>

  //   <div className="flex justify-center bg-gray-200 py-4 h-full">
  //     <Spinner />
  //   </div>
  // </Layout>
};

function sortProducts(adverts: any[]) {
  return adverts.sort((a, b) => {
    const aCreationDate = new Date(a.creationDate)?.getTime();
    const bCreationDate = new Date(b.creationDate)?.getTime();
    if (bCreationDate > aCreationDate) {
      return 1;
    }
    if (bCreationDate < aCreationDate) {
      return -1;
    }
    if (isNaN(aCreationDate) || isNaN(bCreationDate)) {
      return 0;
    }
    return 0;
  });
}

export default ProductsPage;
