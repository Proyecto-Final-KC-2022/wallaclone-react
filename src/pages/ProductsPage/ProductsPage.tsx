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
import FilterBar, { BarFilters } from "../../components/filter/FilterBar";
import { Toaster, toast } from "react-hot-toast";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const ProductsPage = (): JSX.Element => {
  const limitPerPage: number = 8;
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshData, setRefreshData] = useState(false);
  const [advertisementsPayload, setAdvertisementsPayload] = useState<
    Payload<GetAllAdvertisementsQueryParams>
  >({
    queryParams: {
      start: 0,
      limit: limitPerPage,
    },
  });

  const {
    isLoading,
    error,
    data: adverts = [],
    hasMore,
  } = usePagination(
    AdvertisementsSrv.getAllAdvertisements,
    advertisementsPayload,
    pageNumber,
    refreshData
  );
  const observer = useRef<any>();
  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    setAdvertisementsPayload((prevPayload) => {
      return {
        queryParams: {
          ...prevPayload.queryParams,
          start: prevPayload.queryParams.start + limitPerPage,
        },
      };
    });
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

  const filteredAdverts = [...(adverts as Array<Advert>)];
  const getFilters = (filters: {
    filtersFromBar?: BarFilters;
    searchInputFilter?: string;
  }) => {
    //localhost:3000/api/anuncios?price=50-250
    //encodear el array de tags y modificar el api para que busque por coincidencias sobre ese array
    const priceFilter = filters?.filtersFromBar
      ? `${filters?.filtersFromBar?.priceRange?.min}-${filters?.filtersFromBar?.priceRange?.max}`
      : null;
    const tagsFilter = filters?.filtersFromBar
      ? `${encodeURIComponent(JSON.stringify(filters?.filtersFromBar?.tags))}`
      : null;
    const nameFilter = filters?.searchInputFilter;
    setRefreshData(!refreshData);
    setPageNumber(1);
    setAdvertisementsPayload((prevPayload) => {
      return filters?.filtersFromBar
        ? {
            queryParams: {
              ...prevPayload.queryParams,
              start: 0,
              price: priceFilter,
              tags: tagsFilter,
            },
          }
        : {
            queryParams: {
              ...prevPayload.queryParams,
              start: 0,
              name: nameFilter,
            },
          };
    });
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Layout
        isMainPage={true}
        getSearchInputValue={(value: string) => {
          getFilters({ searchInputFilter: value });
        }}
      >
        <FilterBar
          getFilters={(filtersFromBar: BarFilters) => {
            getFilters({ filtersFromBar });
          }}
        />
        <div
          className={
            filteredAdverts?.length > 0
              ? "grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 xl:px-[200px] px-[15px] py-[15px] min-h-[100vh] bg-gray-200"
              : ""
          }
        >
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
                <NotFoundPage
                  customText='No se han encontrado productos'
                  hideButton={true}
                  insideLayout={false}
                />
              )}
            </>
          )}
        </div>

        {!isLoading && !error && (
          <>
            {filteredAdverts.length > 0 && hasMore && pageNumber === 1 && (
              <div className='flex py-[1.5rem] justify-center text-[16px] font-semibold bg-gray-200'>
                <LoadMoreButton onClickFn={goToNextPage} />
              </div>
            )}
          </>
        )}

        {isLoading && (
          <div className='flex justify-center bg-gray-200 py-4 h-full'>
            <Spinner />
          </div>
        )}

        {error && !isLoading && (
          <div>{toast.error("Se ha producido un error en la aplicación")}</div>
        )}
      </Layout>
    </>
  );
};

export default ProductsPage;
